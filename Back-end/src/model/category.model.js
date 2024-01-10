const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  user: mongoose.Schema.Types.ObjectId,
  name: "String",
  icon: "",
  cate: "",
  color: "",
  updatedAt: new Date(),
  createdAt: new Date(),
});

module.exports = {
  Category,
};
