require("dotenv").config();
const app = require("./app");
const { appConfig } = require("./config");
const connectDb = require('./db/mongodb')


connectDb()
const port = process.env.APP_PORT;

app.listen(port, () => console.log(`APP listen on ${appConfig.port}`));

