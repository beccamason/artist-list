const express = require("express"); 
const router = express.Router(); 
const User = require("../models/user");

router.post("/", (req, res) => {
    let name = req.body.name;
    let email = req.body.email; 
    let password = req.body.password;
    let user = new User({name: name, email: email, password: password});
    user.save(); 
    res.status(201).send("New User Created Successfully");
});

module.exports = router;