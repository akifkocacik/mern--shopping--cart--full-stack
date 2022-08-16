const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    products: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
