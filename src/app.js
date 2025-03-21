const express = require('express')

const app = express()


//app.use('/hello/hello ',function(req,res){
//    res.send('hello ji')
//    })
//   
//    app.use('/test',function(req,res){
//        res.send("hello hello hello")
//    })
//    
//
//app.use('/',function(req,res){
//    res.send('hello world')
//})


app.get('/user',function(req,res){
   res.send('hello ji')
})

app.post('/user',function(req,res){
    res.send('Hello hello hello')
})






app.patch('/user',function(req,res){
    res.send('only ji')
})

app.put('/user',function(req,res){
    res.send('hello world')
})






app.listen(7000,function(){
    console.log("server is running")
})




