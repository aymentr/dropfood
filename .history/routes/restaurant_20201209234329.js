const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth
} = require("../utils/Auth");

const {
    FetchRestaurant,
    DeleteRestaurant,
    ADDRestaurant,
    UpdateRestaurant

} = require("../utils/Houses");

// Fetch Houses Route
router.get("/Restaurant", userAuth, async(req, res) => {
    return await FetchHouses(req, res);
});

// Fetch House Equipments Router


//add restaurant Router
router.post("/add-Restaurant", async(req, res) => {
    return await AddHouses(req, res);
});

//delete restaurant Router
router.delete("/delete-Restaurant/:id", async(req, res) => {
    return await DeleteHouses(req, res);
});

//Update restaurant Router
router.put("/update-Restaurant/:id", async(req, res) => {
    return await UpdateHouses(req, res);
});





module.exports = router;