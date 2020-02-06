const mongoose = require("mongoose");

mongoose.connection.on("open", () =>
  console.log("db connected with MongoDB Atlas")
);

async function connectDb() {
  const url =
    "mongodb+srv://ivanolvera:phmp9814@cluster0-q14lz.mongodb.net/test?retryWrites=true&w=majority";
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDb;
