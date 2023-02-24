const express = require('express');
const passport = require('passport');

require('dotenv').config();

const config = require("./config/main");
const { hashPassword, comparePassword, createJWT } = require("./utils/password-auth");
const User = require("./model/user.model");
const connection = require('./config/database');



/**
 * -------------- Express SETUP ----------------
 */

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



/**
 * -------------- PASSPORT SETUP ----------------
 */


app.use(passport.initialize());
require('./config/passport');


/**
 * -------------- ROUTES ----------------
 */

app.get('/dashboard-route-protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {

    res.status(200).json({ msg: "You are now inside the protected Route" });
});


app.post('/login', (req, res, next) => {
    return User.findOne({ username: req.body.username })
        .then(async (user) => {

            if (!user) {
                return res.status(401).json({ success: false, msg: "could not find user" });
            }

            const isValid = await comparePassword(req.body.password, user.hash);

            if (isValid) {
                const tokenObject = createJWT(user);
                res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });

            } else {
                res.status(401).json({ success: false, msg: "you entered the wrong password" });
            }

        })
        .catch((err) => {
            next(err);
        });
});


app.post('/register', async (req, res, next) => {

    const hash = await hashPassword(req.body.password);
    const newUser = new User({
        username: req.body.username,
        hash: hash,
    });

    newUser.save()
        .then((user) => {
            console.log(user);

            res.json('New User has been Created Successfully');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json('Something Goes wrong');
        });

});



// Catch 404 Not Found errors and forward to error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handler middleware function
app.use((err, req, res, next) => {
    // Set status code and error message based on error object
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});



connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
    const PORT = config.mongoose.port || 3000;
    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    });
});


