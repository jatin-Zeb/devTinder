const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello World hello");
});

app.use("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})