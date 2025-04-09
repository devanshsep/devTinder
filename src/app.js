const express = require("express")


const app = express()

app.use('/',(req,res)=>{
   res.send("Hello ji")
})



app.listen(7000,()=>{
    console.log('Server is running')
})