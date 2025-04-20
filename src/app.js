const express = require("express")




const app = express()

// Logic of db call and get some user data 

app.get('/getUserData',(req,res)=>{


  try {

    throw new Error ("xyz")
    res.send("User data send")
    
  } catch (error) {
    res.status(500).send("Something went wrong contact support team")

    
  }

})




app.use('/',(err,req,res,next)=>{


  if (err){
    res.status(500).send("Something went wrong")
  }

})






app.listen(7000,()=>{
    console.log('Server is running')
  
})


