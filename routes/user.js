const router = require("express").Router();
// Bring in the User Registration function
const {
    userAuth,
    userLogin,
    userRegister,
    updateProfile,
    serializeUser
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register-user", async(req, res) => {
    await userRegister(req.body, "user", res);
});




// Users Login Route
router.post("/login-user", async(req, res) => {
    await userLogin(req.body, "user", res);
});



// Profile Route
router.get("/profile", userAuth, async(req, res) => {
    return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get("/user-protected",
    userAuth,

    async(req, res) => {
        return res.json("Hello User");
    }
);


// User Profile Update Route
router.put("/edit-profile/:id", userAuth, async(req, res) => {
    await updateProfile(req, res)
});


module.exports = router;