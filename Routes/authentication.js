const express=require("express");
const AuthenticationRoute=express.Route();
const users=require("../model/usermodel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const KEY="doremon";

AuthenticationRoute.post("http://localhost:3000/auth/register",async(req,res)=>{
    const {username,password,name,email}=req.body;
    const user=await users.find({username});
    if(user){
        res.status(400).json({message:"username alrady exist"})
    };
    const hashpass= await bcrypt.hash(password,10);
    user=({username,password:hashpass,name,email});
    await user.save()
    .then("user registed,now login please")
    .catch("error please try again later")
    
    res.json({"User Info":username,name,email})

});

AuthenticationRoute.post("http://localhost:3000/auth/login",async(req,res)=>{
    const {username,password}=req.body;
    req.user=req.body;
    const user=await users.find({username});
    if(!user){
        res.status(404).json({message:"username not found"})
    };
    const isValidPass= bcrypt.compare(user.password,password);
    if(isValidPass){
        const token=jwt.sign({_id:user._id,role:user.role},KEY,{expireIn:"5h"});
        res.json({"token":token})
    }
})

module.exports=AuthenticationRoute;
