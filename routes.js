const express = require("express"); 
const user = require("./models/user");
const router = express.Router(); 
const User = require("./models/user");

router.get("/", async(req, res) => {
    const users = await user.find({});
    res.status(200).json(users);
});

router.post("/", (req, res) => {
    let name = req.body.name;
    let email = req.body.email; 
    let password = req.body.password;
    let user = new User({name: name, email: email, password: password});
    user.save(); 
    res.status(201).send("New User Created Successfully")
});

module.exports = router; 