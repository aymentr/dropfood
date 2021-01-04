const { Schema, model } = require("mongoose");

const CommandeSchema = new Schema({
   
    Date: {
        type: Date,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },
}, { timestamps: true });
module.exports = model("commande", CommandeSchema);