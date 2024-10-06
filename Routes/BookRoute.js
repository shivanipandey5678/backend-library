
const express=require("express");
const BookRoute=express.Route();
const checkaccess=require("../middleware/checkaccess");
const auth=require("../middleware/auth");
const BookModel=require("../model/bookmodel");

BookRoute.post("http://localhost:3000/books",auth,checkaccess(admin),async(req,res)=>{
    const newBook= new BookModel({
        title:req.title,
        ISBN:req.ISBN,
        summary:req.summary,
        publicationDate:req.publicationDate,
        genres:req.genres,
        copiesAvailable:req.copiesAvailable,
        authorId:req.authorId
    });

    await newBook.save();
    console.log("new Book added");
    res.json({"Book details":newBook})
});



BookRoute.get("http://localhost:3000/Books/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const Books=await BookModel.findOne({id});
    if(!Books){
        res.status(404).json({message:"Book not found"})
    }
    res.json({"Book":Books})
});



BookRoute.put("http://localhost:3000/Books/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const Books=await Bookmodel.findByIdAndUpdate({id,data});
    if(!Books){
        res.status(404).json({message:"Book not found"})
    }
    res.json({"update data":Books})
});



BookRoute.get("http://localhost:3000/Books/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
     const Books= await Bookmodel.findByIdAndDelete({id});
    if(!Books){
        res.status(404).json({message:"Book not found"})
    }
    res.json({message:"Book deleted"})
});

module.exports=BookRoute;

