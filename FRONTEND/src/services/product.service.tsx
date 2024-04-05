import axios from "axios";
import { urlBase } from "../defaultValues";

export const getAllProducts = () =>
    axios.get(`${urlBase}/products`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });