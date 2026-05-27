const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    full_name: String,
    user_name: String,
    email: String,
    password: String
}, { timestamps: true });

module.exports = mongoose.model("Users", userSchema);
