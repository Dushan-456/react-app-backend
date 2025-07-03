const User = require("../Model/UserModel");


//Users display function------------------------------------------------------------------------
const getAllusers = async(req,res,next)=>{

    let users;
    //Get all users
    try{
        users = await User.find();
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



//User Add Function -----------------------------------------------------------------------------------

const addUsers = async(req,res,next)=>{

    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = new User({name,gmail,age,address});
        await users.save();
    }catch(err){
        console.log(err);
    }

    // if user is not enter
    if(!users){
        return res.status(404).json({massage:"Unable to add User"});
    }
    return res.status(200).json({users});

}



//Get by ID Function -----------------------------------------------------------------------------------

const getById = async(req,res,next)=>{

    const id = req.params.id;
    let user;
    try{
        user = await User.findById(id);
    }catch(err){
        console.log(err);
    }

      // if user is not available
    if(!user){
        return res.status(404).json({massage:"User not Found"});
    }
    return res.status(200).json({user});

}

exports.getAllusers = getAllusers;
exports.addUsers = addUsers;
exports.getById = getById;