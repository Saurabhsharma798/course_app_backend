const jwt = require("jsonwebtoken")
const { User } = require("../db/index")
const {jwtSecret}=require("../config")

async function userMiddleware(req,res,next) {
    // const username = req.headers.username
    // const password = req.headers.password
    // const value = User.findOne({
    //     username:username,
    //     password:password
    // }) 
    // if (value){
    //     next()
    // }else{
    //     res.status(403).json({
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

module.exports = userMiddleware