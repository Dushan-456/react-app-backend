const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
        name:{
            type:String,  // data Type
            required:true, // Validate
        },  
        gmail:{
            type:String,  // data Type
            required:true, // Validate
        },          
        age:{
            type:Number,  // data Type
            required:true, // Validate
        },  
        address:{
            type:String,  // data Type
            required:true, // Validate
        }

});

module.exports = mongoose.model(
    "UserModel",    //file name
    userSchema      //Function name
)