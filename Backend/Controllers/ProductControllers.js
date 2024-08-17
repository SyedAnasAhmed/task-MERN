import { request, response } from "express";
import { Products } from "../Models/products.js";

const createProducts = async (request , response) =>{
    try {
        const product = await Products.create(request.body);
        response.status(200).json(product)
        console.log(product)
    } catch (error) {
        response.json({
            data: [],
            status: false,
            message: error.message,
          });
          console.log(error.message)
        }
}

const getProducts = async (request, response) => {
    try {
        const product = await Products.find({})
        response.status(200).json(product)
        console.log(product)
    } catch (error) {
        response.json({
            data: [],
            status: false,
            message: error.message,
          });
          console.log(error.message)
        }
}

export {createProducts, getProducts}