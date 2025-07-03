// console.log("Dushannoon");
//pass = 9YNvLzsgDODwzRCQ
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

// Middleware
app.use("/users",router)


mongoose.connect("mongodb+srv://admin:9YNvLzsgDODwzRCQ@cluster0.4l8hnzf.mongodb.net/")
.then(()=> console.log("Connected to Mongo DB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));