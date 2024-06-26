import { Product } from "../models/Product.js";
import { SpecialPriceUser } from "../models/SpecialPriceUser.js"
import { User } from "../models/User.js";

export const getAlllSpecialPriceUser = async (req, res) => {
    const { user_id, nombre_producto } = req.params;
    try {
        const specialPriceUser = await SpecialPriceUser.find();
        res.json(specialPriceUser);
    } catch (error) {
        res.status(409).json({ error: 'Error al obtner todos los usuarios con productos en descuento' });
    }
}

export const createSpecialPriceUser = async (req, res) => {
    const { user_id, nombre_producto } = req.params;

    // Validation (assuming validation middleware is not used)
    if (!user_id || !nombre_producto) {
        return res.status(400).json({ error: "Parámetros inválidos" });
    }

    try {
        // Find user and product
        const [user, product] = await Promise.all([
            User.findById(user_id),
            Product.findOne({ name: nombre_producto })
        ]);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        // Check if relationship already exists (optional)
        const existingRelation = await SpecialPriceUser.findOne({
            user_associate: user,
            product_price_associate: product
        });

        if (existingRelation) {
            return res.status(409).json({ error: "La relación ya existe" });
        }

        const specialPriceUser = new SpecialPriceUser({
            user_associate: user,
            product_price_associate: product,

        });

        specialPriceUser.user_associate.product_special_price.push(specialPriceUser._id);
        await specialPriceUser.save();
        await user.save();

        // Actualizar el campo de relación especial de precio de usuario en el usuario
        // user.product_special_price.push(specialPriceUser._id);


        res.status(201).json({ message: "Relación creada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(409).json({ error: "Error al crear la relación" });
    }
};

export const deleteSpecialPriceUser = async (req, res) => {
    const { special_relation_id } = req.params;
    console.log(req.params);
    try {
        // Encuentra la relación especial de precio de usuario por su ID
        const specialPriceUser = await SpecialPriceUser.findByIdAndDelete(special_relation_id);

        if (!specialPriceUser) {
            return res.status(404).json({ error: "Relación especial de precio de usuario no encontrada" });
        }

        // Encuentra el usuario asociado a la relación
        const user = await User.findById(specialPriceUser.user_associate);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Elimina la referencia de la relación en el usuario
        user.product_special_price.pull(specialPriceUser._id);
        await user.save();

        res.status(200).json({ message: "Relación especial de precio de usuario eliminada exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la relación especial de precio de usuario" });
    }
};


