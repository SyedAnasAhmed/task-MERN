import { Router } from "express";
import { createProducts, getProducts } from "../Controllers/ProductControllers.js";



const router = Router();

router.post("/create" , createProducts)
router.get("/" , getProducts)

export default router;