import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/ProductRoutes.js";
import {v2 as cloudinary} from "cloudinary";
import multer from "multer";

const app = express();
const PORT = 3000;
app.use(express.json());
dotenv.config();

app.use("/api/products", router);

cloudinary.config({
 cloud_name : process.env.CLOUD_NAME,
  api_key :  process.env.API_KEY,
  api_secret : process.env.API_SECRET
});

const storage = multer.memoryStorage(); // Store files in memory buffer
const upload = multer({ storage });


mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Successfully connected to mongodb");
  app.listen(PORT, () => {
    console.log(`Server chalraha hai : ${PORT}`);
  });
})
.catch((error) => {
  console.log(error);
});
