const mongoose = require("mongoose"); 

const List = new mongoose.Schema({
    userID: {
        type: String, 
        required: true
    },
});

module.exports = mongoose.model("list", List);