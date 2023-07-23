import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId, // type is id of category object
      ref: "Category", //we are taking the reference from Category collection(model)
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer, // data is property and it type if buffer
      contentType: String, //represent the media type of a file, such as images, audio, video, etc.
    },
    //Buffer is a built-in Node.js class used to represent binary data. In this context, it is used to store the binary representation of an image or file. 
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
