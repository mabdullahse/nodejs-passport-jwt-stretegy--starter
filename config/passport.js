const config = require("./main");
const passport = require('passport');
const { comparePassword } = require('../utils/password-auth');


const User = require("../model/user.model");

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;




// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secretOrKey,
    algorithms: [config.jwtAlgorithm]
};

// app.js will pass the global passport object here, and this function will configure it

passport.use(new JwtStrategy(options, function (jwt_payload, done) {


    console.log('jwt_payload==>',jwt_payload);

    User.findOne({ _id: jwt_payload.sub }, function (err, user) {

        // This flow look familiar?  It is the same as when we implemented
        // the `passport-local` strategy
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }

    });

}));

module.exports = passport;

