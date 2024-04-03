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

// Ruta para crear un nuevo producto
router.post('/products', async (req, res) => {
    try {
        const newProduct = new Product(req.body); // Crear una nueva instancia de Product con los datos recibidos en el cuerpo de la solicitud
        await newProduct.save(); // Guardar el nuevo producto en la base de datos
        res.status(201).json(newProduct); // Enviar el nuevo producto como respuesta
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
});

export default router;