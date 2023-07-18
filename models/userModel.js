import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //it will remove the white spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String, // we kept it as a string because we can also add contry code here
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, // if role is 0 then it is user, if role is 1 then it is admin
    },
  },
  { timestamps: true } // whenever new user will be created then his time stamp will be add
);

export default mongoose.model("users", userSchema);
// users is our collection name in ecommerse database and userSchema is the above schema