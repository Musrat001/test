const express = require("express");
require("dotenv").config();
const app = express();
const User = require("./models/user.models.js");
const multer = require("multer");
const upload = multer();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const connectDb = require("./controllers/user.controllers.js");
const connectDB = require("./controllers/user.controllers.js");
const port = process.env.PORT;


connectDB();
app.use(express.json());


const cors = require("cors");
app.use(cors());
// user register code from backend
app.post("/register", upload.none(), async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
            full_name: req.body.full_name,
            user_name: req.body.user_name,
            email: req.body.email,
            password: hashedPassword

        });

        await newUser.save();

        res.json({ message: "User registered successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    console.log(req.headers["content-type"]);
});



app.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // fetch all users
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// end of user register and get user data that has registered..

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     console.log(password);
//     // console.log(user.password);
//     // console.log(user);




//     if (!user) {
//         return res.json({ message: "User not found" });
//     }

//     // compare password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//         return res.json({ message: "Invalid password" });
//     }

//     // generate token
//     const token = jwt.sign(
//         { id: user._id, email: user.email },
//         "secretKey",
//         { expiresIn: "1h" }
//     );
//     console.log("original_token", token);


//     res.json({
//         message: "Login successful",
//         token
//     });
// });



app.listen((port), () => {
    console.log(`server is ruunig on port number ${port}`);

})