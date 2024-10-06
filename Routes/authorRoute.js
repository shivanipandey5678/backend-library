
const express=require("express");
const AuthorRoute=express.Route();
const checkaccess=require("../middleware/checkaccess");
const auth=require("../middleware/auth");
const authorModel=require("../model/authormodel");

AuthorRoute.post("http://localhost:3000/authors",auth,checkaccess(admin),async(req,res)=>{
    const newauthor= new authorModel({
        name:req.name,
        biography:req.biography,
        dateOfBirth:req.dateOfBirth,
        nationality:req.nationality
    });

    await newauthor.save();
    console.log("new author added");
    res.json({"Author details":newauthor})
});
AuthorRoute.get("http://localhost:3000/Authors",auth,checkaccess(admin),async(req,res)=>{
    const authors=await authorModel.find();
    if(!authors){
        res.status(500).json({message:"try again later"})
    }
    res.json({"Authors":authors})
})

AuthorRoute.get("http://localhost:3000/Authors/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const Authors=await Authormodel.findOne({id});
    if(!Authors){
        res.status(404).json({message:"Author not found"})
    }
    res.json({"Author":Authors.Books})
});



AuthorRoute.put("http://localhost:3000/Authors/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const Authors=await Authormodel.findByIdAndUpdate({id,data});
    if(!Authors){
        res.status(404).json({message:"Author not found"})
    }
    res.json({"update data":Authors})
});



AuthorRoute.get("http://localhost:3000/Authors/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
     const Authors= await authormodel.findByIdAndDelete({id});
    if(!Authors){
        res.status(404).json({message:"Author not found"})
    }
    res.json({message:"Author deleted"})
});

module.exports=AuthorRoute;

