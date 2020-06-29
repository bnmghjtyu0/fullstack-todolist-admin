const experss = require("express");
const bodyParser = require("body-parser");
const { db, fireAuth } = require("../db.js");
// Above are library

const router = experss.Router();
var bodyParserJSON = bodyParser.json(); //parse application/json
router.get("/signup", (req, res) => {
  return res.status(200).send({ status_code: 0 });
});
router.post("/signup", bodyParserJSON, (req, res) => {
  var nickname = req.body.nickname;
  var email = req.body.email;
  var password = req.body.password;
  fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then(function (data) {
      var saveUser = {
        email: email,
        nickname: nickname,
        uid: data.user.uid,
      };
      db.collection("users")
        .doc(data.user.uid)
        .set(saveUser)
        .then(function () {
          console.log("Document successfully written!");
        });
      return res.status(200).send({
        status_code: 1,
        results: "註冊成功",
      });
    })
    .catch(function (error) {
      return res.status(200).send({
        status_code: 1,
        results: error.message,
      });
    });
});

module.exports = router;
