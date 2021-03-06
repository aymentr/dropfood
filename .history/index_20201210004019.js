const cors = require("cors");
const router = require("express").Router();
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");


// Bring in the app constants
const { DB, PORT } = require("./config");

// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

require("./middlewares/passport")(passport);

// User Router Middleware

app.use("/api/user", require("./routes/user"));
app.use("/api/restaurant", require("./routes/restaurant"));
app.use("/api/restaurant", require("./routes/commande"));

const startApp = async() => {
    try {
        // Connection With DB
        await connect(DB, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        success({
            message: `Successfully connected with the Database \n${DB}`,
            badge: true
        });

        // Start Listenting for the server on PORT
        app.listen(PORT, () =>
            success({ message: `Server started on PORT ${PORT}`, badge: true })
        );
    } catch (err) {
        error({
            message: `Unable to connect with Database \n${err}`,
            badge: true
        });
        startApp();
    }
};

startApp();