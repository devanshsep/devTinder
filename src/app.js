const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('hello world')
})

app.get('/test',function(req,res){
res.send('hello ji')
})


app.listen(7000,function(){
    console.log("server is running")
})

