const mongoose = require("mongoose");
require("dotenv").config()
const connectDB = async () => {
    try {
        //await mongoose.connect("mongodb://localhost:27017/myDatabase");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;