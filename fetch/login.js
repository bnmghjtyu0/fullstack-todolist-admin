const fetch = require("node-fetch");

const post = () => {
  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "bnmghu@gmail.com",
      password: "bnmghjtyu",
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};

module.exports = {
  post,
};
