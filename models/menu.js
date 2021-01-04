const { Schema, model } = require("mongoose");

const MenuSchema = new Schema({


    id_menu: {
        type: String,
        required: true
    },
    nom_menu: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });
module.exports = model("menu", MenuSchema);