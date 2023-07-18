import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path'
import { fileURLToPath } from "url";
//configure env
dotenv.config();


//creating the rest object for to create the API's
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// //middelwares
app.use(cors()); //allowing the server to handle requests from different origins.
app.use(express.json()); //parses incoming request bodies with JSON payloads.
app.use(morgan('dev'));  // allows you to log HTTP requests and their details to the console, helping you with development, debugging

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use(express.static(path.join(__dirname, './client/build')))
//rest api
app.use('*', function(req, resp)
{
  resp.sendFile(path.join(__dirname,'./client/build/index.html')); 
})

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
