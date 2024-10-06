const mongoose=require("mongoose");
const express=require("express");
const userRoute=require("./Routes/userRoute");
const authenticationRoute=require("./Routes/authentication");
const authorRoute=require("./Routes/authorRoute");


const app=express();
app.use(express.json());
app.use("/userRoute",userRoute);
app.use("/authenticationRoute",authenticationRoute);
app.use("/authorRoute",authorRoute);
app.get("/healthcheck",(req,res)=>{
    res.send("healthy")
})

app.listen(3000,()=>{
    console.log("port is listening at 3000")
})