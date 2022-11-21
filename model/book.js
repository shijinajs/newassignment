const mongoose=require('mongoose')
const Schema=mongoose.Schema
const bookShema=new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

let bookList=mongoose.model('bookData',bookShema)
module.exports=bookList