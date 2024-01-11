const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  user: mongoose.Schema.Types.ObjectId,
  name: String,
  icon: String,
  cate: String,
  color: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Category,
};
