import { Schema, SchemaTypes, model } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    product_special_price: {
        type: [{ type: Schema.Types.ObjectId, ref: 'SpecialPriceUser' }], // Reference SpecialPriceUser model
        default: [],
    },
}, { versionKey: false });

export const User = model("user", userSchema);