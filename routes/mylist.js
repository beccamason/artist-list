const express = require("express"); 
const router = express.Router(); 
const User = require("../models/user");
const Artist = require("../models/newArtist");

router.post("/", async(req, res) => {
    try {
    const user = await User.findById({_id: req.body._id});
    let favArtists = []; 
    for (i = 0; i < user.favouriteArtists.length; i++) {
        let holder = user.favouriteArtists[i];
        artist = await Artist.findById({_id: holder});
        favArtists.push(artist); 
    }
    res.status(200).send(`Here are your Favourite Artists! ${favArtists}`);
    } catch (err) {
        res.status(400).send(`Error: ${err}`); 
    }
});

favArtists = [];

module.exports = router;