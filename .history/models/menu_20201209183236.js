const { Schema, model } = require("mongoose");

const CommandeSchema = new Schema({
    id_Restaurant: {
        type: String,
        required: true
    },
    Nom_Restaurant: {
        type: String,
        required: true
    },

}, { timestamps: true });
module.exports = model("menu", MenuSchema);