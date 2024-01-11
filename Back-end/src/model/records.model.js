const { default: mongoose } = require("mongoose");

const Record = mongoose.model("Record", {
  type: String,
  category: String,
  amount: String,
  date: String,
  payee: String,
  note: String,
  color: String,
  icon: String,
  time: String,
});

module.exports = {
  Record,
};
