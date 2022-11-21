const express=require('express')
const router=express.Router()

const Data=require('../model/book')

//get data
router.get('/booklist',async(req,res)=>{
    try {
        let list=await Data.find()
        res.send(list)
    } catch (error) {
        consolr.log(error)
    }
})
//add data
router.post('/book',async(req,res)=>{
    try {
        console.log(req.body)
        let item={
            title:req.body.title,
            author:req.body.author,
            content:req.body.content,
            price:req.body.price
        }
        const newBook=new Data(item)
        const saveBook=await newBook.save()
        res.send(saveBook)

    } catch (error) {
        console.log(error)
    
    }
})
//delete data
router.delete('/book/:id',async(req,res)=>{
    try {
        let id=req.params.id
        const deleteBooks=await Data.findByIdAndDelete(id)
        res.send(deleteBooks)
    } catch (error) {
        console.log(error)
    }
})

//update data
router.put('/book',async(req,res)=>{
    try {
        let id=req.body.id
        let item={
            title:req.body.title,
            author:req.body.author,
            content:req.body.content,
            price:req.body.price
        }
        let updateData={
            $set:item
        }
        let updateBook= await Data.findByIdAndUpdate({'id':id},updateData)
        res.send(updateBook)
    } catch (error) {
        console.log(error.message)
    }
})
//get single data
router.get('/book/:id',async(req,res)=>{
    try {
        let id=req.params.id
        const singleBook=await  Data.findById(id)
        res.send(singleBook)
    } catch (error) {
        console.log(error)
    }
})





module.exports=router