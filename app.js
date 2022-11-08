const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  const result = addDays(new Date(y, m, d), 100);
  response.send(
    `${result.getDate()}/${result.getMonth()}/${result.getFullYear()}`
  );
});

module.exports = app;

app.listen(3000);
