import { Products } from "../Models/products.js";
import cloudinary from "cloudinary"

const createProducts = async (request, response) => {
  try {
    if (request.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ resource_type: "image" }, (error, result) => {
            if (error) {
              reject(error);
              console.log("nahi jari")
            } else {
              resolve(result);
              console.log("chaligai")
            }
          })
          .end(request.file.buffer);
      });

      // Add the image URL to the request body
      request.body.imageUrl = result.secure_url;
      console.log(result)
    }
    const product = await Products.create(request.body);
    response.status(200).json(product);
    console.log(product);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
    console.log(error.message);
  }
};

const getProducts = async (request, response) => {
  try {
    const product = await Products.find({});
    response.status(200).json(product);
    console.log(product);
  } catch (error) {
    response.json({
      data: [],
      status: false,
      message: error.message,
    });
    console.log(error.message);
  }
};

export { createProducts, getProducts };
