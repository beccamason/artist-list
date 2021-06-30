const express = require("express"); 
const router = express.Router(); 
const Artist = require("../models/newArtist");
const User = require("../models/user");

router.post("/", async (req, res) => {
    try {
        const artist = new Artist({
            name: req.body.name, 
            nationality: req.body.nationality, 
            medium: req.body.medium,
            owner: req.body.userId
        });
        await artist.save();

        const user = await User.findById({_id: artist.owner});
        user.favouriteArtists.push(artist);
        await user.save();
        res.status(201).send(`New Artist Added to Your List: ${artist}`);
    } catch (err) {
        res.status(400).send(`Error: ${err}`)
    }
});

module.exports = router;