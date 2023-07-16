import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();


//creating the rest object for to create the API's
const app = express();

// //middelwares
app.use(cors()); // this is used when there is connection problems when we connect frontend with backend
app.use(express.json());
app.use(morgan('dev'));

// //routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => { // this method contains two parameters to handle the API's
  res.send("<h1>Welcome to Gaikwad Enterprises</h1>");
});

//PORT
const PORT = process.env.PORT || 8080; // 8080 is optional if PORT is not accecible from .env


const connectDB = async () => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Conneted To Mongodb Databse`);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};
//run listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server Running on port ${PORT}`);
});
