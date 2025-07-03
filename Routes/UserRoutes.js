const express = require("express");
const router = express.Router();
// Insert Model
const User = require("../Model/UserModel");
// Insert User Controller
const UserController = require("../Controlers/UserControlers");


router.get("/",UserController.getAllusers);

//export
module.exports = router ;