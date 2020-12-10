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
    GSM: {
        type: String,
        required: false
    },


    images: {
        type: Array,
        required: true
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
        type: String;
        required: true
    }
})

module.exports = model("Restaurant", RestaurantSchema);