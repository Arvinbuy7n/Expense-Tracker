const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Arvinbuyn:Aagii1215@arvinbuyn.z1bszfh.mongodb.net/Income?retryWrites=true&w=majority"
    );
    console.log("Connected database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  connectDatabase,
};
