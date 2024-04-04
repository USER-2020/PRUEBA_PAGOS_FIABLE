import express from "express";
import { addProducts, getAllProducts } from "../controllers/product.controller.js";


const router = express.Router()

// Ruta para obtener todos los productos
router.get('/products', getAllProducts);

//Ruta para add productos
router.post("/products", addProducts);


export default router;