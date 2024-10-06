const mongoose=require("mongoose");

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    ISBN:{
        type:String,
        require:true,
        unique:true
    },
    summary:{
        type:String
    },
    publicationDate:{
        type:Date
       
    },
    genres:{
        type:[String]
    },
    copiesAvailable:{
        type:Number,
        default:1
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:"Authors"
    },
    borrowBy:
        [{type:mongoose.Schema.Types.ObjectId,ref:"Users"}]
    

});
const BookModel=mongoose.model("Books",BookSchema);
module.exports=BookModel;




