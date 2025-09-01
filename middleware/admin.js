const { Admin } = require("../db/index")
const jwt=require("jsonwebtoken")
const {jwtSecret}=require("../config")
async function adminMiddleware(req,res,next){
    // const username = req.headers['username']
    // const password =  req.headers['password']
    // const value = await Admin.findOne({
    //     username:username,
    //     password:password
    // })
    // console.log(value)
    // if (value){
    //     return next();
    // }else{
    //     return res.status(403).json({
    //         msg:"user doesn't exist"
    //     })
    // }

    const token=req.headers.authorization
    const words=token.split(" ")
    const jwtToken=words[1]
    const decodeValue = jwt.verify(jwtToken,jwtSecret)
    if (decodeValue){
        next();
    }else{
        res.status(403).json({
            msg:"you are not authenticated"
        })
    }

}


module.exports= adminMiddleware