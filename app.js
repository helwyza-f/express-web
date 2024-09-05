const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(expressLayouts);

app.get("/", (req, res) => {
  var options = {
    layout: "partials/main-layout",
    title: "Home Page",
  };
  res.render("index", options);
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "partials/main-layout",
    title: "About Page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "partials/main-layout",
    title: "Contact Page",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
