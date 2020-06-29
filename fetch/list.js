const fetch = require("node-fetch");

const get = () => {
  fetch("https://interview-todolist.herokuapp.com/api/list")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};

module.exports = {
  get,
};
