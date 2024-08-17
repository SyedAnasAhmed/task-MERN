import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
app.use(express.json());
dotenv.config();

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
