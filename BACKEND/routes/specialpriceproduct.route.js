import express from "express";
import { createSpecialPriceUser, deleteSpecialPriceUser, getAlllSpecialPriceUser } from "../controllers/specialpriceproduct.controller.js";

const routerSpecialPriceProductUser = express.Router();

routerSpecialPriceProductUser.get("/price/specialPrices", getAlllSpecialPriceUser);
routerSpecialPriceProductUser.post("/price/:user_id/:nombre_producto", createSpecialPriceUser);
routerSpecialPriceProductUser.delete("/price/:special_relation_id", deleteSpecialPriceUser);

export default routerSpecialPriceProductUser;