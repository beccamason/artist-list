const express = require("express"); 
const mongoose = require("mongoose"); 
const User = require("./models/user");
const app = express(); 
const artistRouter = require("./routes/artist");
const listRouter = require("./routes/mylist");
const registerRouter = require("./routes/register");
const userRouter = require("./routes/users");
require("dotenv").config(); 

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

app.use(express.json()); 
app.use("/artist", artistRouter);
app.use("/mylist", listRouter);
app.use("/register", registerRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

app.get("/", async(req, res) => { 
    res.send("<h1>Hello World</h1>")
})