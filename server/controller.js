module.exports = {
  addUser: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.create_user([username, password])
      .then(() => res.status(200).send(), console.log("POST Succesful..."))
      .catch(err => console.log("POST ERROR", err));
  },
  loginUser: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.get_user([username, password])
      .then(response => {
        //   req.session.username = req.body.username;
        //   req.session.password = req.body.password;
        //   console.log("SESSION USERNAME ", req.session.username);
        //   console.log("SESSION PASSWORD ", req.session.password);

        res.status(200).send(response);
      })
      .catch(err => console.log("error/login--> ", err));
  }
};
