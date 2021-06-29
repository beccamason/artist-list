const express = require("express"); 
const router = express.Router(); 
const artist = require("../models/newArtist");
const list = require("../models/list");
const List = require("../models/list");

router.get("/", async(req, res) => {
    const artists = await artist.find({"userid": userID});
    res.status(200).json(artists);
});

module.exports = router;