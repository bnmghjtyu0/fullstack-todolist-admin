const fetch = require("node-fetch");

const post = () => {
  fetch("http://localhost:5000/api/signup", {
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
};

module.exports = {
  post,
};
