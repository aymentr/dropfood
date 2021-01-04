const jwt = require("jsonwebtoken");
const passport = require("passport");
const { SECRET } = require("../config");
const restaurant = require("../models/restaurant");
const menu = require("../models/menu");
const commande = require("../models/commande");





const FetchRestaurant = async(req, res) => {
    const resto = await restaurant.find();
    if (resto) {
        res.status(200).json({
            houses,
            success: true,
        });
    } else {
        res.status(400).json({
            message: 'couldn\'t find any restaurant',
            success: false,
        });
    }
};

const ADDRestaurant = async(req, res) => {
    const resto = new restaurant({
        nom: req.body.nom,
        description: req.body.description,
        addresser: req.body.addresser,
        disponibilite: req.body.disponibilite,
        GSM: req.body.GSM,
        total_note: req.body.total_note,
        average_note: req.body.average_note,
        user_id: req.body.user_id
    })

    await resto.save();
    return res.status(201).json({
        message: "restaurant has been added.",
        success: true
    });
};



const DeleteRestaurant = async(req, res) => {
    restaurant.findByIdAndRemove({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.json({
                message: 'error',
                success: false
            })
        } else {
            if (doc)
                res.json({
                    message: "resto has been deleted!",
                    success: true
                })
            else {
                res.json({
                    message: "couldnt find resto",
                    success: false
                })
            }
        }
    });
}

const UpdateRestaurant = async(req, res) => {
    const id = req.params.id;
    const Room = await restaurant.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check Restaurant Update",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, Restaurant id not found",
                    success: false
                });
            } else {
                if (req.body.id) {
                    foundObject.id = req.body.id
                }
                if (req.body.nom) {
                    foundObject.nom = req.body.nom
                }
                if (req.body.description) {
                    foundObject.description = req.body.description
                }
                if (req.body.addresser) {
                    foundObject.addresser = req.body.addresser
                }
                if (req.body.disponibilite) {
                    foundObject.disponibilite = req.body.disponibilite
                }
                if (req.body.GSM) {
                    foundObject.GSM = req.body.GSM
                }
                if (req.body.total_note) {
                    foundObject.total_note = req.body.total_note
                }
                if (req.body.average_note) {
                    foundObject.average_note = req.body.average_note
                }
                if (req.body.user_id) {
                    foundObject.user_id = req.body.user_id
                }









                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save restaurant!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'Restaurant info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}
const FetchRestaurantsByName = async(req, res) => {
    const resto = await restaurant.find({ nom: req.body.nom });
    if (resto) {
        res.status(200).json({
            resto,
            success: true,
        });
    } else {
        res.status(400).json({
            message: 'couldn\'t find any restaurant with that name',
            success: false,
        });
    }
}
const FetchRestaurantByAddress = async(req, res) => {
    const resto = await restaurant.find({ addresser: req.body.addresser });
    if (resto) {
        res.status(200).json({
            resto,
            success: true,
        });
    } else {
        res.status(400).json({
            message: 'couldn\'t find any restaurant with that address',
            success: false,
        });
    }
};
const ADDMenuRestaurant = async(req, res) => {
    const newMenu = new menu({
        id_menu: req.body.id_menu,
        nom_menu: req.body.nom_menu,
        price: req.body.price


    })
    await newMenu.save();
    return res.status(201).json({
        message: "menu has been added.",
        success: true
    });



};

const DeleteMenu = async(req, res) => {
    menu.findByIdAndRemove({ id_menu: req.params.id_menu }, (err, doc) => {
        if (err) {
            res.json({
                message: 'error',
                success: false
            })
        } else {
            if (doc)
                res.json({
                    message: "menu has been deleted!",
                    success: true
                })
            else {
                res.json({
                    message: "couldnt find menu",
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
    UpdateRestaurant,
    FetchRestaurantsByName,
    FetchRestaurantByAddress,
    ADDMenuRestaurant,
    DeleteMenu
};