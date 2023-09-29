const env = require("dotenv");
env.config();
module.exports = {
    mongoUrl:`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hniiezl.mongodb.net/twitter`,
    Jwt_secret:process.env.JWT_SECRET
}