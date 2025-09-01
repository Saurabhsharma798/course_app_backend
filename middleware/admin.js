const { Admin } = require("../db/index")


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

}


module.exports= adminMiddleware