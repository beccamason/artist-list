const express = require("express"); 
const mongoose = require("mongoose"); 
const User = require("./models/user");
const app = express(); 
const userRouter = require("./routes");
require("dotenv").config(); 

app.use(express.json()); 
app.use("/users", userRouter); 

const port = process.env.PORT || 5000; 

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/signup", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected"); 
    } catch (err) {
        console.log(err);
    }
};

connectDB(); 

const user = new User({
    name: "Becca",
    email: "bexbkool@test.com", 
    password: "potato"
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

app.get("/", async (req, res) => {
    await user.save(); 
    res.send("<h1>Hello World</h1>")
})