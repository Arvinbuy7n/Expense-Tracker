const { default: mongoose } = require("mongoose");

const Record = mongoose.model("Record", {
  userId: mongoose.Schema.Types.ObjectId,
  type: String,
  category: String,
  amount: String,
  date: String,
  payee: String,
  note: String,
  color: String,
  icon: String,
  time: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Record,
};
