const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      "mongodb://ivanolvera:phmp9815@ds119660.mlab.com:19660/heroku_xkj9b26r",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  console.log("db connected with MongoDB Atlas");
};
module.exports = connectDb;
