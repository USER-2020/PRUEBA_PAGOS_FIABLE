import axios from "axios";
import { urlBase } from "../defaultValues";

export const getAllUsers = () =>
    axios.get(`${urlBase}/users`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })