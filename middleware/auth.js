const jwt=require("jsonwebtoken");
const KEY="doremon";
const auth=async(req,res,next)=>{
    const token=req.header.authorization.split(" ")[1];
    if(!token){
        res.status(400).json({message:"token not receives please insert token"})
    };
    const tokencheck=jwt.verify(token,KEY);
    if(!tokencheck){
        res.status(400).json({message:"invalide token please login again"})
    }
    next()

}

module.exports=auth;