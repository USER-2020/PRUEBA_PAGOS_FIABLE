import express from "express";
import { Product } from "../models/Product.js";


const router = express.Router()

// Ruta para obtener todos los productos
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Buscar todos los productos en la base de datos
        res.json(products); // Enviar los productos como respuesta
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

router.post('/products', async (req, res) => {
    try {
        const { stock, unit_price, brand, name } = req.body;
        if (!stock || !unit_price || !brand || !name) {
            // console.log(stock, unit_price, brand, name);
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;