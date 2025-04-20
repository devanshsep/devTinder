const express = require("express")


const {adminAuth,userAuth} = require('./middlewares/auth')


const app = express()

// This will Handle only get call to the /user

app.use('/admin',adminAuth
)


app.use('/user',userAuth,(req,res)=>{
res.send("User Data send")
})








app.get('/admin/getAllData',(req,res)=>{
//logic of fetching all Data

res.send("All Data Send")
}
)






app.get('/admin/DeleteUser',(req,res)=>{
  res.send("Deleted a user")
})







app.listen(7000,()=>{
    console.log('Server is running')
  
})


