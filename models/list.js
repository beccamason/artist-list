const mongoose = require("mongoose"); 

const list = new mongoose.Schema({
    userID: {
        type: String, 
        required: true
    },
});

module.exports = mongoose.model("list", list);