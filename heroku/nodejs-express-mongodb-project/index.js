const express = require("express");
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");

const Name = mongoose.model("Name", new mongoose.Schema({ name: String }));

mongoose.connect("mongodb://localhost/test-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
express()
  .set("view engine", "ejs")
  .set("path", __dirname + "/views")
  .use(express.urlencoded())
  .get("/", function (req, res) {
    Name.find().then((names) => {
      console.log(names);
      return res.render("home", { name_list: names });
    });
  })
  .post("/create-contact", function (req, res) {
    Name.create({ name: req.body.name }).then((name) => {
      return res.redirect("back");
    });
  })
  .listen(PORT, function (err) {
    if (err) console.log("the server is not working");
    console.log("servier is runnig", PORT);
  });
