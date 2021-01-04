const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    addresser: {
        type: String,
        required: true
    },
    disponibilite: {
        type: Boolean,
        required: true
    },
    GSM: {
        type: String,
        required: false
    },
    images: {
        type: Array,
        required: false
    },

    total_note: {
        type: Number,
        required: true
    },
    average_note: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = model("restaurant", RestaurantSchema);