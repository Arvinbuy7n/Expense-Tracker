const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  userId: mongoose.Schema.Types.ObjectId,
  icon: String,
  cate: String,
  color: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Category,
};
