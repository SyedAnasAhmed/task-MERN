import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/ProductRoutes.js";
import  cloudinary from "cloudinary";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
dotenv.config();

app.use("/api/products", router);

cloudinary.v2.config({
 cloud_name : "dtmu13mzr",
  api_key :  666723765695526 ,
  api_secret : "shv9StJ-38-DKQU1FThalZIrscM"
});


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
