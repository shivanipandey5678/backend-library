const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["Admin","Member"],
        default:"Member"
    },
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    borrowedBooks:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:"Books"}]
    }

});
const userModel=mongoose.model("Users",userSchema);
module.exports=userModel;


