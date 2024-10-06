const auth=(requiredRole)=>{
    return async(req,res,next)=>{
        if(req.user.role!==requiredRole){
            res.status(400).json({message:"access denied"})
        }
        next()
    }
}
module.exports=auth;