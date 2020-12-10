const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth
} = require("../utils/auth");

const {
    FetchRestaurant,
    DeleteRestaurant,
    ADDRestaurant
    

} = require("../utils/restaurant");


router.get("/Restaurant", async(req, res) => {
    return await FetchRestaurant(req, res);
});




//add restaurant Router
router.post("/add-Restaurant", async(req, res) => {
    return await ADDRestaurant(req, res);
});

//delete restaurant Router
router.delete("/delete-Restaurant/:id", async(req, res) => {
    return await DeleteRestaurant(req, res);
});

//Update restaurant Router






module.exports = router;