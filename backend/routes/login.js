const express=require('express')
const router= express.Router();


router.get('/',(req,res)=>{
    console.log("login successfully");
})

module.exports= router