const { Schema, model } = require("mongoose");

const RestaurantTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})