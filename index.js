const express = require("express");

const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.post("*", (req, res) => {
  res.status(200).json({
    baby_yoda: "sad",
    mando: "🔫 angy",
    message: "This is not the way"
  });
});

app.listen(port);
