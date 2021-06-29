const express = require("express"); 
const router = express.Router(); 
const artist = require("../models/newArtist");

router.get("/", async(req, res) => {
    const artists = await artist.find({"userid": "60d9e71b5c99be4e28a972f7"});
    res.status(200).json(artists);
});

module.exports = router;