const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    categoryType : {
      type: String,
    },
    isActive: {
      type:Boolean,
      default: true
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;