const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const session = require("express-session");
// Above are library
const { db, fireAuth } = require("./db.js");
const signup = require("./routers/signup");
const login = require("./routers/login");
const user = require("./routers/user");
const list = require("./routers/list");
// Below are start
const app = express();
app.use(cors());
app.use(
  session({
    secret: "richard superior",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.get("/", (req, res) => {
  const auth = req.session.uid; //如果有登入，才會有 auth
  return res.status(200).send({
    status_code: 1,
    results: "歡迎使用 todolist api",
    auth: auth,
  });
});

app.use("/api", signup);
app.use("/api", login);
app.use("/api", user);
app.use("/api", list);

var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
