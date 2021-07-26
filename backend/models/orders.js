const mongoose = require("mongoose");

let orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    url: { type: String },
    details: {
      where: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderSchema);
