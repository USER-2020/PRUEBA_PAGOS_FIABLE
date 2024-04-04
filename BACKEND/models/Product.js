import { Schema, model } from "mongoose";

const productSchema = new Schema({
    stock: {
        type: Number,
        required: true,
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
}, { versionKey: false });

export const Product = model("product", productSchema);