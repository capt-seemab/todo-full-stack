const mongoose=require('mongoose');
const {Schema}=   mongoose
const userSignup=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    },
    isActive:{
        type:Boolean,
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User=mongoose.model('Signup',userSignup)
User.createIndexes();
module.exports=User