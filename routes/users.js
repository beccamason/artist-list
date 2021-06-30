const express = require("express"); 
const user = require("../models/user");
const router = express.Router(); 

router.get("/", async(req, res) => {
    const users = await user.find({});
    res.status(200).json(users);
});

module.exports = router; 