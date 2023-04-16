const mongoose=require('mongoose');
const {Schema}=   mongoose
const todoList=new Schema({
    email:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('todoList',todoList)