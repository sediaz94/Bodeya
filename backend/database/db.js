const dotenv = require("dotenv")

dotenv.config()


module.exports = {
  mongoURI:
    process.env.DB_coud,
  secretOrKey: "secret",
};
