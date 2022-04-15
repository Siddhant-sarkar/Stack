const db = require("../util/database");
const login = require("../models/aLogin");
exports.adminLogin = (req, res, next) => {
  res.render("login", {
    who: "admin",
    wrong: "false",
  });
};

exports.adminAuthenticate = (req, res, next) => {
  const body = req.body;
  const l = new login(body.username, body.password);
  l.auth()
    .then(([rows]) => {
      if (rows[0].cnt) {
        return res.send("welcome sir");
      } else {
        return res.render("login",{who:'admin',wrong:'true'});
      }
    })
    .catch((err) => console.log(err));
};
