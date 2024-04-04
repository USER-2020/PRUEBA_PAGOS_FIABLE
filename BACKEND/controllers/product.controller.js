import { Product } from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Buscar todos los productos en la base de datos
        res.json(products); // Enviar los productos como respuesta
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }

}

//Creart productos en DB
export const addProducts = async (req, res) => {
    try {
        const { stock, unit_price, special_price, brand, name } = req.body;
        console.log(req.body);

        const newProduct = new Product({
            stock,
            unit_price,
            special_price,
            brand,
            name,
        });

        await newProduct.save();

        res.status(201).json(newProduct); // Send a 201 Created response with the new product
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors with a 400 Bad Request
    }
};

// console.log(req.body);
//     try {
//         // Accede a los datos del cuerpo de la solicitud
//         const { stock, unit_price, special_price, brand, name } = req.body;
//         // Valida los datos si es necesario (no se muestra aquí)

//         // Crea un nuevo producto
//         const newProduct = new Product({
//             stock,
//             unit_price,
//             special_price,
//             brand,
//             name,
//         });

//         // Guarda el producto en la base de datos
//         await newProduct.save();

//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }