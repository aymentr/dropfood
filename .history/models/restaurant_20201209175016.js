const { Schema, model } = require("mongoose");

const RestaurantSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    adresser: {
        type: String,
        required: true
    },
    disponibilite: {
        type: Boolean,
        required: true
    },

    sexe: {
        type: String,
        required: false
    },
    GSM: {
        type: String,
        required: false
    },

    addresse: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },

    total_note: {
        type: Number,
        required: true
    },
    average_note: {
        type: Number,
        required: true
    }
})

module.exports = model("Restaurant", RestaurantSchema);