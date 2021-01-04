const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth
} = require("../utils/auth");

const {
    FetchRestaurant,
    DeleteRestaurant,
    ADDRestaurant,
    FetchRestaurantByAddress,
    FetchRestaurantsByName,
    ADDMenuRestaurant,
    DeleteMenu



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
router.put("/UpdateResto/:id", async(req, res) => {
    return await UpdateRestaurant(req, res);
});

router.get("/addresser", async(req, res) => {
    return await FetchRestaurantByAddress(req, res);
});
router.get("/nom", async(req, res) => {
    return await FetchRestaurantByName(req, res);
});


router.post("/add-menu", async(req, res) => {
    return await ADDMenuRestaurant(req, res);
});
router.delete("/delete-menu/:id", async(req, res) => {
    return await DeleteMenu(req, res);
});




module.exports = router;