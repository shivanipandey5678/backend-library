const mongoose=require("mongoose");

const BorrowingSchema= new mongoose.Schema({
    
    borrowData:{
        type:Date,
        default:Date.now()
       
    },
    dueDate:{
        type:Date,
        require:true
    },
    returnDate:{
        type:Date
      
    },
    book:{
        type:mongoose.Schema.Types.ObjectId,ref:"Books",
        require:true
    },
    member:
        {type:mongoose.Schema.Types.ObjectId,ref:"Users",
            require:true 
        },
    status:{
        type:String,
        enum:["Borrowed","Returned"],
        default:"Borrowed"
    }
    

});
const BorrowingModel=mongoose.model("Borrowings",BorrowingSchema);
module.exports=BorrowingModel;




