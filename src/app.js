const express = require("express")


const app = express()

// This will Handle only get call to the /user





// This will work on all Http methods

app.use('/user',
[  (req,res,next)=>{

 
 // res.send("Hello ji 1")
  next();


},
(req,res,next)=>{
//res.send("hello ji 2")

next()
},




(req,res,next) =>{
 // res.send("hello ji 3")

  
  next()
},

(req,res,next) =>{
 // res.send("hello ji 4")

  next()
}],

(req,res) =>{
  res.send("hello ji 5")


}


)

app.listen(7000,()=>{
    console.log('Server is running')
  
})


