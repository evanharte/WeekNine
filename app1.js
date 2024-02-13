const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});

// this is required to use ejs - have to set the view engine so it knows how to parse the ejs files
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Darth Vader" });
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/test", (request, response) => {
  //   const filePath = path.join(__dirname, "views/test.html");
  response.render("test.ejs");
});

app.use((req, res, next) => {
  res.status(404);
  res.render("404.ejs");
});
