const Restaurant = require("../models/restaurant");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../config");
const { json } = require("body-parser");


const FetchRestaurant = async(req, res) => {
    const resto = await restaurant.find();
    if (resto) {
        res.status(200).json({
            houses,
            success: true,
        });
    } else {
        res.status(400).json({
            message: 'couldn\'t find any house',
            success: false,
        });
    }
};

const ADDRestaurant = async(req, res) => {
    const resto = new restaurant({
        id: req.body.id,

        nom: req.body.nom,
        description: req.body.description,
        adresser: req.body.adresser,
        disponibilite: req.body.disponibilite,
        GSM: req.body.GSM,
        total_note: req.body.total_note,
        average_note: req.body.average_note,
        user_id: req.body.user_id
    })

    await restaurant.save();
    return res.status(201).json({
        message: "House has been added.",
        success: true
    });
};



const = async(req, res) => {
    restaurant.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.json({
                message: 'error',
                success: false
            })
        } else {
            if (doc)
                res.json({
                    message: "House has been deleted!",
                    success: true
                })
            else {
                res.json({
                    message: "couldnt find house",
                    success: false
                })
            }
        }
    });
}




module.exports = {
    FetchRestaurant,
    DeleteRestaurant,
    ADDRestaurant,
    UpdateRestaurant
};