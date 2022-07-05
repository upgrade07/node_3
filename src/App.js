const express = require("express");
const app = express();

const middleware1 = function (req, res, next) {
  console.log("middleware 1");
  next();
};

app.get("/", middleware1, (req, res) => {
  res.send("<h1>Middleware 1</h1>");
});

const middleware2 = (req, res, next) => {
  console.log("middleware 2");
  next();
};

app.use(middleware2);

app.get("/page1", middleware1, (req, res) => {
  res.send("<h1>page 1 with middleware 1 and middleware 2 </h1>");
});

app.get("/page2", (req, res) => {
  res.send("<h1>page 2 middleware 2</h1>");
});
app.get("/page3", (req, res) => {
  res.send("<h1>page 3 middleware 2</h1>");
});
app.get("/page4", (req, res) => {
  res.send("<h1>page 4 middleware 2</h1>");
});

app.listen(6500, () => {
  console.log("server running");
});
