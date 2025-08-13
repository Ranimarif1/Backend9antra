const mongoose = require("mongoose");

module.exports.connectMongoDB = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.Url_Mongo)
    .then(
      // put your MongoDB URI
      () => {
        console.log("Connected to DB");
      }
    )
    .catch((error) => {
      console.log("Error connecting to DB:", error);
    });
};

//ranimarif93
//hOtATYOJMV4b4ORy
