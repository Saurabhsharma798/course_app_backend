const { Admin } = require("../db/index")


async function adminMiddleware(req,res,next){
    const username = req.headers.username
    const password =  req.headers.password
    const value = Admin.findOne({
        username:username,
        password:password
    })
    if (value){
        next();
    }else{
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }

}


module.exports= adminMiddleware