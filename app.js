const express=require('express')
const cors=require('cors')
const logger=require('morgan')
const jwt = require('jsonwebtoken');
const PORT=8525

const app=new express()

require('./middlewire/mongoDB')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))


const api=require('./routers/api')
app.use('/api',api)
const url=require('./routers/sign')
app.use('/api',url)


app.get('/',async(req,res)=>{
res.json('helo')
})
app.post('/api/login',async(req,res)=>{
    try {
        let email=req.body.email;
        let password=req.body.password;
        let payload={
            'email':email,
            'password':password,
            'date':Date.now()
        }
        let token=await jwt.sign(payload,'secretCode')//create token
        res.send({token})
    } catch (error) {
        console.log(error)
    }
})








app.listen(PORT,()=>{
    console.log(`.......server is running at ${PORT}......`)
})