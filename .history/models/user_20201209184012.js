const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
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