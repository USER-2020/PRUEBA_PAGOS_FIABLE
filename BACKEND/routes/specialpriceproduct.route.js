import express from "express";
import { createSpecialPriceUser, getAlllSpecialPriceUser } from "../controllers/specialpriceproduct.controller.js";

const routerSpecialPriceProductUser = express.Router();

routerSpecialPriceProductUser.get("/price/:user_id/:nombre_producto", getAlllSpecialPriceUser);
routerSpecialPriceProductUser.post("/price/:user_id/:nombre_producto", createSpecialPriceUser);

export default routerSpecialPriceProductUser;