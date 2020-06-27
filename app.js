const express = require("express");
const db = require("./db.js");
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

app.listen(4000, () => {
  console.log("App listening on port 4000!");
});
