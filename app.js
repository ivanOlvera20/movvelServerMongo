const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}) 

app.use(express.urlencoded({ extended: true }));

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
app.use('/api/mat_consumo', require('./routes/mat_consumo'))
app.use('/api/vendedor', require('./routes/vendedor'))
app.use("/api/linea", require("./routes/linea"));
app.use("/api/producto", require("./routes/producto"));
app.use("/api/cliente", require("./routes/cliente"));

module.exports = app;
