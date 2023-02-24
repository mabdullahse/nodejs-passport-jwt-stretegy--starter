
module.exports = {
  mongoose: {
    url: process.env.DB_STRING,
    port: process.env.PORT,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  secretOrKey: process.env.jwtSecketKey,
  tokenExpirationTine: process.env.TO_EXPIRE,
  jwtAlgorithm: process.env.ALGO
};

