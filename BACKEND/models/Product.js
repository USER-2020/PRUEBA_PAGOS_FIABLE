import { Schema, model } from "mongoose";

const productSchema = new Schema({
    stock: {
        type: Number,
        required: true,
        default: 10,
    },
    unit_price: {
        type: Number,
        required: true,
    },
    special_price: {
        type: Number,
    },
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    }
});

export const Product = model("products", productSchema);