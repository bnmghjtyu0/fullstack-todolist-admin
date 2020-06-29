const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        arr.push({
          ...doc.data(),
        });
      });
      return res.status(200).send({
        status_code: 1,
        results: arr,
      });
    });
});

module.exports = router;
