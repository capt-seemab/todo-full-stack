const express=require('express')
const router= express.Router();
const signup=require('../models/signup')

router.post('/',async (req,res)=>{
    console.log("signup successfully");
    console.log(req.body);
    const data=await signup.findOne({email:"abhi"})
    res.send(data)
    // const signUser=userSignup(req.body)
    //  signUser.save();
    //  res.send(req.body)
})

module.exports= router