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
    cost: { type: Number, required: true },
    url: { type: String },
    address: {
      where: { type: String, required: true },
      locale: { type: String, required: true },
    },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderSchema);
