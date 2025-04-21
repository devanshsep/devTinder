
const express = require("express")


const connectDB = require("./config/database")
const User = require("./models/user")



const app = express()

app.use(express.json())




app.post('/signup',async(req,res)=>{

const user = new User (req.body)




try {

  await user.save()

res.send("Data sent successfully")

  
} catch (error) {
  res.status(500).send("Something went wrong",error)
}






})




connectDB().then(()=>{
  app.listen(7000,()=>{
    console.log("Server is running")
  })
  
  console.log("Database is connected Successfully")
  }).catch(err=>{
    console.log(err)
  console.log("Database is not connected")
  })
  
  
















