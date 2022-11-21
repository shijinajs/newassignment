const express=require('express')
const router=express.Router()
const Data=require('../model/signup')
//post data
router.post('/signup',async(req,res)=>{
    try {
        console.log(req.body)
        let item={
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        }
        const newdata=new Data(item)
        const savedata=await newdata.save()
        res.send(savedata)

    } catch (error) {
        console.log(error)
    
    }
})







module.exports=router