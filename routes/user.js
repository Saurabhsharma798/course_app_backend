const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const router=Router()

router.post('/signup',(req,res)=>{
    //
});

router.post('/courses',userMiddleware,(req,res)=>{
    //
});


router.get('/courses',userMiddleware,(req,res)=>{
    // 
});

module.exports =router;