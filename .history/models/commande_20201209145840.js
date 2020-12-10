const { Schema, model } = require("mongoose");

const CommandeSchema = new Schema({
    id_Restaurant: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
}, { timestamps: true })
module.exports = model("commande", CommandeSchema);