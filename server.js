require("dotenv").config();
const app = require("./app");
const connectDb = require('./db/mongodb')


connectDb()
const port = process.env.APP_PORT || 8080;

app.listen(port, () => console.log(`APP listen on ${port}`));

