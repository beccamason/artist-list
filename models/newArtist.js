const mongoose = require("mongoose"); 
const {Schema} = require("mongoose");

const Artist = new mongoose.Schema({
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
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    }
});

module.exports = mongoose.model("artists", Artist);