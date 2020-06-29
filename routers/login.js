const express = require("express");
const bodyParser = require("body-parser");

const { db, fireAuth } = require("../db.js");
const router = express.Router();

var bodyParserJSON = bodyParser.json(); //parse application/json

router.post("/login", bodyParserJSON, function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  fireAuth
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log("登入成功");
      let data = {};
      data.uid = user.user.uid;
      // 登入成功，設定 session
      req.session.userInfo = data;
      return res.status(200).send({
        status_code: 1,
        status_message: "登入成功",
        results: {
          uid: user.user.uid,
        },
      });
    })
    .catch(function (error) {
      return res.status(200).send({
        status_code: 0,
        status_message: error.message,
      });
    });
});

module.exports = router;
