const mongoose = require("mongoose"); 

const artist = new mongoose.Schema({
    userid: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    nationality: {
        type: String, 
        required: true
    },
    medium: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("artists", artist);