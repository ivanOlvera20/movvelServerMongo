const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://ivanolvera:phmp9814@cluster0-q14lz.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
  console.log("db connected with MongoDB Atlas");
};
module.exports = connectDb;
