import { User } from "../models/User.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' + error });
    }
}

export const addUsers = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(req.body);

        const newUser = new User({
            name
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}