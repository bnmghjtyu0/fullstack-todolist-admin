const fetch = require("node-fetch");

const get = () => {
  fetch("http://localhost:5000/api/list")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};

module.exports = {
  get,
};
