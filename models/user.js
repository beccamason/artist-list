const mongoose = require("mongoose"); 
const {Schema} = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favouriteArtists: [{
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }]
});

module.exports = mongoose.model("users", User);