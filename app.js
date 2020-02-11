const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

/* app.use("/public", express.static(`${__dirname}/storage/imgs`));

app.use("/api/products", require("./routes/product"));
app.use("/api/users,", require("./routes/user"));

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});
 */

app.use('/api/familia', require('./routes/familia'))
app.use('/api/modelo', require('./routes/modelo'))
app.use('/api/mat_prima', require('./routes/mat_prima'))
app.use('/api/vendedor', require('./routes/vendedor'))
app.use("/api/linea", require("./routes/linea"));
module.exports = app;
