const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");

/**
 * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
 */


const userRegister = async(userDets, res) => {
    try {
        // Validate the username
        let usernameNotTaken = await validateUsername(userDets.username);
        if (!usernameNotTaken) {
            return res.status(400).json({
                message: `Username is already taken.`,
                success: false
            });
        }

        // validate the email
        let emailNotRegistered = await validateEmail(userDets.email);
        if (!emailNotRegistered) {
            return res.status(400).json({
                message: `Email is already registered.`,
                success: false
            });
        }

        // Get the hashed password
        const password = await bcrypt.hash(userDets.password, 12);
        // create a new user
        const newUser = new user({
            ...userDets,
            password
        });

        await newUser.save();
        return res.status(201).json({
            message: "Hurry! now you are successfully registred. Please  login.",
            success: true
        });
    } catch (err) {
        // Implement logger function (winston)
        return res.status(500).json({
            message: "Unable to create your account.",
            success: false
        });
    }
};

/**
 * @DESC To Login the user (ADMIN, SUPER_ADMIN, USER)
 */
const userLogin = async(userCreds, res) => {
    let { email, password } = userCreds;
    // First Check if the username is in the database
    const user = await user.findOne({ email });
    if (!user) {
        return res.status(404).json({
            message: "Email is not found. Invalid login credentials.",
            success: false
        });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        // Sign in the token and issue it to the user
        let token = jwt.sign({
                user_id: user._id,
                username: user.username,
                email: user.email
            },
            SECRET, { expiresIn: "7 days" }
        );

        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        };

        return res.status(200).json({
            ...result,
            message: "Hurray! You are now logged in.",
            success: true
        });
    } else {
        return res.status(403).json({
            message: "Incorrect password.",
            success: false
        });
    }
};

/**
 * @DESC To update user profile (ADMIN, SUPER_ADMIN, USER)
 */
const updateProfile = async(req, res) => {
    const id = req.params.id;
    const user = await user.findOne({ _id: id }, (err, foundObject) => {
        if (err) {
            res.status(500).json({
                message: "Error, check updateProfile",
                success: false
            });
        } else {
            if (!foundObject) {
                res.status(404).json({
                    message: "Error, user id not found",
                    success: false
                });
            } else {
                if (req.body.adresse) {
                    foundObject.adresse = req.body.adresse
                }
                if (req.body.name) {
                    foundObject.name = req.body.name
                }
                if (req.body.email) {
                    foundObject.email = req.body.email
                }
                if (req.body.password) {
                    foundObject.password = req.body.password
                }
                if (req.body.birthday) {
                    foundObject.birthday = req.body.birthday
                }
                if (req.body.sexe) {
                    foundObject.sexe = req.body.sexe
                }
                if (req.body.phone) {
                    foundObject.phone = req.body.phone
                }

                if (req.body.avatar) {
                    foundObject.avatar = req.body.avatar
                }
                foundObject.save(function(err) {
                    if (err) {
                        res.status(500).json({
                            message: "Error, couldn't save user!",
                            success: false
                        });
                    } else {
                        res.status(201).json({
                            message: 'User info has been updated successfully!',
                            success: true
                        });
                    }
                })
            }
        }
    });
}

const validateUsername = async username => {
    let user = await user.findOne({ username });
    return user ? false : true;
};

/**
 * @DESC Passport middleware
 */
const userAuth = passport.authenticate("jwt", { session: false });

/**
 * @DESC Check Role Middleware
 */


const validateEmail = async email => {
    let user = await user.findOne({ email });
    return user ? false : true;
};

const serializeUser = user => {
    return {
        username: user.username,
        email: user.email,
        name: user.name,
        _id: user._id,
        birthday: user.birthday,
        sexe: user.sexe,
        phone: user.phone,
        addresse: user.addresse,
        avatar: user.avatar
    };
};

module.exports = {
    userAuth,
    userLogin,
    userRegister,
    updateProfile,
    serializeUser
};