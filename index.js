const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = parseInt(process.env.PORT, 10) || 3000;

app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(cors("*"));

app.get("/", (req, res) => {
  try {
    client.connect(async err => {
      assert.equal(null, err);
      const db = client.db(process.env.name);
      const collection = db.collection("data");
      const data = await collection.find({}).toArray();
      const messages = data
        .filter(i => i.message && i.publish)
        .map(i => ({
          message: i.message,
          name:
            i.name || nicknames[Math.floor(Math.random() * nicknames.length)]
        }));
      res.status(200).json({
        status: "sucesses",
        messages
      });
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: `Ain't vibin 'cause; ${err}`
    });
  }
});

app.get("*", (req, res) => {
  res.redirect("https://mik1337.github.io");
});

app.post("*", (req, res) => {
  res.redirect("https://mik1337.github.io/"); // 501 failure
});

app.listen(port).then(() => console.log(`Running on port ${port}`));
