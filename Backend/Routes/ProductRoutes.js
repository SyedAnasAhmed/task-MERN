import { Router } from "express";
import { createProducts, getProducts } from "../Controllers/ProductControllers.js";
import { upload } from "../Middleware/MulterConfig.js";

const router = Router();

router.post("/create" , upload.single('image'), createProducts)
router.get("/" , getProducts)

export default router;