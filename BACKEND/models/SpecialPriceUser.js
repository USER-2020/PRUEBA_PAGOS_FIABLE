import { Schema, SchemaTypes, model } from "mongoose";

const specialPriceUserSchema = new Schema({
    user_associate: {
        type: Schema.Types.Mixed,
        ref: 'User', // Referencia al modelo User
        required: true,
    },
    product_price_associate: {
        type: Schema.Types.Mixed,
        ref: 'Product', // Referencia al modelo Product
        required: true,
    },

}, { versionKey: false });

export const SpecialPriceUser = model("specialPriceProductUser", specialPriceUserSchema);