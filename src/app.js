const express = require('express')

const {adminAuth,UserAuth} = require('./middlewares/auth')

const app = express()


// app.use('/user',(req,res,next)=>{
// 
//     console.log("Response 1")
// 
//    // res.send("Response 1")
// 
// next()
// 
// })

// app.get('/user',(req,res)=>{
// 
//     console.log("Response 2")
// 
//    // res.send("Response 2")

//})


app.use('/admin',adminAuth)


app.get('/user',UserAuth,(req,res)=>{
    res.send('User Data send')
})



app.get('/admin/getAllData',(req,res)=>{
    



 res.send("Data are sent")
     

})


app.get('/admin/deleteUser',(req,res)=>{    
 
res.send('Data deleted successfully')
})











app.listen(7000,function(){
    console.log("server is running")
})




