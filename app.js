const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { db, fireAuth } = require("./db.js");
//
var bodyParserJSON = bodyParser.json(); //parse application/json
var cors = require("cors");
// Above are library
const app = express();
app.use(cors());

const api = express.Router();
app.use("/api", api);

api.put("/list", (req, res) => {
  db.collection("list").doc(req.query.id).update({
    city: req.query.city,
    email: req.query.email,
    name: req.query.name,
  });

  return res.status(200).send({
    status_code: 1,
    status_msg: "更新成功",
  });
});

api.delete("/list", (req, res) => {
  db.collection("list")
    .doc(req.query.id)
    .delete()
    .then(function () {
      console.log("Document successfully deleted!");
    })
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });

  return res.status(200).send({
    status_code: 1,
    status_msg: "刪除成功",
  });
});

api.post("/list", (req, res) => {
  db.collection("list")
    .add({
      city: req.query.city,
      email: req.query.email,
      name: req.query.name,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });

  return res.status(200).send({
    status_code: 1,
    status_msg: "新增成功",
  });
});
api.get("/list", (req, res) => {
  db.collection("list")
    .get()
    .then((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      return res.status(200).send({
        status_code: 1,
        results: arr,
      });
    });
});

api.post("/signup", bodyParserJSON, (req, res) => {
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
          return res.status(200).send({
            status_code: 1,
            results: "Document successfully written!",
          });
        });
    })
    .catch(function (error) {
      return res.status(200).send({
        status_code: 1,
        results: error.message,
      });
    });
});

app.get("/", (req, res) => {
  return res.status(200).send({
    status_code: 1,
    results: "歡迎使用 todolist api",
  });
});

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
