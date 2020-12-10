const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    prenom: {
        type: String,
        required: false
    },
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    motdepasse: {
        type: String,
        required: true
    },
    DateNaissance: {
        type: String,
        required: false
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
}, { timestamps: true });

module.exports = model("user", UserSchema);