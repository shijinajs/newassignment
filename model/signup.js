const mongoose=require('mongoose')
const Schema=mongoose.Schema
const signin=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

let SIGN=mongoose.model('signdata',signin)
module.exports=SIGN