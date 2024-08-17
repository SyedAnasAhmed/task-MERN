import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/ProductRoutes.js";

const app = express();
const PORT = 3000;
app.use(express.json());
dotenv.config();

app.use("/api/products", router);

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
