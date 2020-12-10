const { Schema, model } = require("mongoose");

const LivraisonSchema = new Schema({
    id_Restaurant: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
}, { timestamps: true });
module.exports = model("livraison", LivraisonSchema);