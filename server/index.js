require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const Ctrl = require("./controller");
const session = require("express-session");

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("DB connected");
  })
  .catch(err => console.log("DB NOT connected"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

app.post("/api/user", Ctrl.addUser);
app.post("/api/loginUser/:username/:password", Ctrl.loginUser);

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
