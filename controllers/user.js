const db = require("../util/sDatabase");
const login = require("../models/sLogin");
exports.userLogin = (req, res, next) => {
  res.render("login", {
    who: "user",
    wrong: "false",
  });
};

exports.userAuthenticate = (req, res, next) => {
  const body = req.body;
  const l = new login(body.username, body.password);
  l.auth()
    .then(([rows]) => {
      if (rows[0].cnt) {
        return res.send("welcome sir");
      } else {
        return res.render("login",{who:'user',wrong:'true'});
      }
    })
    .catch((err) => console.log(err));
};
