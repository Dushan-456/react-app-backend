const User = require("../Model/UserModel");

const getAllusers = async(req,res,next)=>{

    let Users;
    //Get all users
    try{
        users = await Users.find();
    }catch(err){
        console.log(err)
    }
    // If Not Found
    if(!users){
        return res.status(404).json({message:"User Not Found"});        
    }
    //Display All Users
    return res.status(200).json({users});
};

exports.getAllusers = getAllusers;