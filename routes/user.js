const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const router=Router()

router.post('/signup',async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const newUser = User.create({username,password})

    res.json({msg:"user created successfully"})
    
});

router.get('/courses'.userMiddleware,async (req,res)=>{
    const response = await Course.find({})
    
    res.json({
        courses:response
    })     
});


router.post('/courses/:id',userMiddleware,async(req,res)=>{
    const courseId = req.params.id
    const username = req.headers.username
    await User.updateOne({
        username
    },{
        "$push":{
        purchasedCourses: courseId
        }
    })
    res.json({msg:"purchase completed"})
});

router.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const username=req.headers.username
    const user = await User.findOne({username})
    console.log(user)
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    console.log(courses)
    res.json({courses})
})


module.exports =router;