import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {  // origional name
    type: String, 
  },
  slug: {   // name into slug form means without white spaces
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);
//category is collection and categorySchema is reference
