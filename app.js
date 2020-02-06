const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(`${__dirname}/storage/imgs`));

app.use("/api/products", require("./routes/product"));
app.use("/api/users,", require("./routes/user"));

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

module.exports = app;
