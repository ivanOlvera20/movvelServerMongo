require("dotenv").config();
const app = require("./app");
const { appConfig } = require("./config");
const connectDb = require("./db/mongodb");

const port = process.env.APP_PORT;

async function initApp(appConfig) {
  try {
    await connectDb();
    app.listen(port, () => console.log(`APP listen on ${appConfig.port}`));
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}

initApp(appConfig);
