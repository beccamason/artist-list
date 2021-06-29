const express = require("express"); 
const router = express.Router(); 
const artist = require("../models/newArtist");
const Artist = require("../models/newArtist");

router.post("/", (req, res) => {
    let userid = req.body.userid; 
    let name = req.body.name; 
    let nationality = req.body.nationality; 
    let medium = req.body.medium;
    let artist = new Artist({userid: userid, name: name, nationality: nationality, medium: medium});
    artist.save();
    res.status(201).send("New Artist Added to Your List!");
});

module.exports = router;