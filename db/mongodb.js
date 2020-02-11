const mongoose = require("mongoose");

const url = "mongodb+srv://ivanolvera:phmp9814@cluster0-q14lz.mongodb.net/test?retryWrites=true&w=majority"

const connectDb = async () => {
  await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
  console.log("db connected with MongoDB Atlas")
}
module.exports = connectDb;
