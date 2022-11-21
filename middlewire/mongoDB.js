const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Shijina:Shijina25@cluster0.bt2utkb.mongodb.net/Librarydata?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('MongoDB is connected!!!!!!!')
}).catch((error=>{
    console.log(error.message)
}))