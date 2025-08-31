const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router=Router()

router.post('/signup',async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    
    const userCreated = await Admin.create({username,password})
    if (userCreated){
        res.status(200).json({msg:"Admin created successfully"})
    }else{
        res.status(403).json({msg:"error while creating Admin"})
    }
});

router.post('/courses',adminMiddleware,async (req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const imageLink=req.body.imageLink
    const price=req.body.price
    const newCourse=await Course.create({title,description,imageLink,price})
    res.status(200).json({msg:"course created successfully", courseId: newCourse._id})
});


router.get('/courses',adminMiddleware,async (req,res)=>{
    const response = await Course.find({})
    
    res.json({
        courses:response
    }) 
});

module.exports =router;