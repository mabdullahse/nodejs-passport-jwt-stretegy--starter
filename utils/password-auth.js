
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const config = require("../config/main");


async function hashPassword(plaintextPassword) {
    const hash = await bcrypt.hash(plaintextPassword, 10);
    return hash;
}

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ msg: 'You are not authorized to view this resource' });
    }
};


function createJWT(user) {
    const _id = user._id;

    const payload = {
        sub: _id,
        iat: Date.now(),
        name: user.username
    };

    const signedToken = jsonwebtoken.sign(payload, config.secretOrKey,
        {
            expiresIn: config.tokenExpirationTine, algorithm: config.jwtAlgorithm
        });

    return {
        token: "Bearer " + signedToken,
        expires: config.tokenExpirationTine
    };
}


module.exports = {
    hashPassword,
    comparePassword,
    isAuth,
    createJWT
};