const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router=Router()

router.post('/signup',async (req,res)=>{
    const username = req.headers.username
    const password = req.headers.password
    
    const userCreated = await Admin.create({username,password})
    if (userCreated){
        res.status(200).json({msg:"Admin created successfully"})
    }else{
        res.status(403).json({msg:"error while creating Admin"})
    }
});

router.post('/courses',adminMiddleware,(req,res)=>{

});


router.get('/courses',adminMiddleware,(req,res)=>{
    // 
});

module.exports =router;