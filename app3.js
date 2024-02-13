const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Simple app running on port ${PORT}.`);
});

app.get("/", (req, res) => {
  res.render("index", { name: "William" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// see comment below before auth function
app.get("/create", auth, (req, res) => {
  console.log(`admin is: ${req.admin}.`);
  res.render("create");
});

app.get("/about/:id", (req, res) => {
  res.send(`This id is ${req.params.id}.`);
});

app.use((req, res) => {
  res.status(404).render("fourohfour");
});

// requires to have localhost:3000/create?admin=true to access the create page
function auth(req, res, next) {
  if (req.query.admin === "true") {
    req.admin = true;
    next();
  } else {
    res.send("no auth.");
  }
}
