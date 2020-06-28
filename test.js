const fetch = require("node-fetch");

fetch("https://interview-todolist.herokuapp.com/api/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nickname: "Richard",
    email: "bnmghu@gmail.com",
    password: "bnmghjtyu",
  }),
})
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
