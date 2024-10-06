
const express=require("express");
const UserRoute=express.Route();
const checkaccess=require("../middleware/checkaccess");
const auth=require("../middleware/auth");
const usermodel=require("../model/usermodel");

UserRoute.get("http://localhost:3000/users",auth,checkaccess(admin),async(req,res)=>{
    const users=await usermodel.find();
    if(!users){
        res.status(500).json({message:"try again later"})
    }
    res.json({"LIST":users})
});

UserRoute.get("http://localhost:3000/users/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const users=await usermodel.findOne({id});
    if(!users){
        res.status(404).json({message:"user not found"})
    }
    res.json({"user":users})
});



UserRoute.put("http://localhost:3000/users/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    const users=await usermodel.findByIdAndUpdate({id,data});
    if(!users){
        res.status(404).json({message:"user not found"})
    }
    res.json({"update data":users})
});



UserRoute.get("http://localhost:3000/users/:id",auth,checkaccess(admin),async(req,res)=>{
    const id=req.params.id;
     await usermodel.findByIdAndDelete({id});
    if(!users){
        res.status(404).json({message:"user not found"})
    }
    res.json({message:"user deleted"})
});

module.exports=UserRoute;

