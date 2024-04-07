import axios from "axios";
import { urlBase } from "../defaultValues";

export const getAlllSpecialPriceUser = () =>
    axios.get(`${urlBase}/price/specialPrices`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

// @ts-ignore
export const addRelationSpecail = (user_id, nombre_producto) =>
    axios.post(`${urlBase}/price/${user_id}/${nombre_producto}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
// @ts-ignore
export const deleteSpecialPriceUser = (special_relation_id) =>
    axios.delete(`${urlBase}/price/${special_relation_id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });