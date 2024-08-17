import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    desc: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    },
    imageURL: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Products = mongoose.model("Products", ProductSchema);
