import axios from "axios";
import { urlBase } from "../defaultValues";

export const getAllUsers = () =>
    axios.get(`${urlBase}/users`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });

export const addUsers = (newUser) =>
    axios.post(`${urlBase}/users`, newUser, {
        headers: {
            'Content-Type': 'application/json',
        }
    });