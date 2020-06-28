const fetch = require("node-fetch");

fetch("http://127.0.0.1:5000/api/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nickname: "Richard",
    email: "bnmghjtyu@gmail.com",
    password: "bnmghjtyu",
  }),
})
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
