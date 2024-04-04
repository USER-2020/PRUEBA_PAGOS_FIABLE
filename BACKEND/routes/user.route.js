import { addUsers, getAllUsers } from "../controllers/user.controller.js";
import express from "express";

const routerUser = express.Router();

//Obtner todos los usuarios
routerUser.get("/users", getAllUsers);

//Agregar un nuevo usuario
routerUser.post('/users', addUsers);

export default routerUser;