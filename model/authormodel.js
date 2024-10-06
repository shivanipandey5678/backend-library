const mongoose=require("mongoose");

const authorSchema= new mongoose.Schema({
    biography:{
        type:String,
       
    },
    name:{
        type:String,
        require:true,
    },
    dateOfBirth:{
        type:Date,
    },
    nationality:{
        type:String,
       
    },
    Books:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:"Books"}]
    }

});
const authorModel=mongoose.model("authors",authorSchema);
module.exports=authorModel;




