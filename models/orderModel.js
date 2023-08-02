import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",  //creating the relationship with products collection
      },
    ],
    payment: {}, // it is a object
    buyer: {
      type: mongoose.ObjectId,
      ref: "users", // making the relationship with users model
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);