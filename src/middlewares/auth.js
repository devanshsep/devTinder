const express = require("express")






const adminAuth = (req,res,next)=>{

    console.log("Admin auth is checked")
  
    token = 'xyzsndk'
  
    isAdminAuthorized = token === "xyz"
  
    if(!isAdminAuthorized ){
      res.status(401).send("Unauthorized Access")

  
    }


  

    else{
      next()
    }

    



  }


  const userAuth = (req,res,next)=>{

    console.log("user auth is checked")
  
    token = 'xyz'
  
    isAdminAuthorized = token === "xyz"
  
    if(!isAdminAuthorized ){
      res.status(401).send("Unauthorized Access")

  
    }


  

    else{
      next()
    }

    



  }











  module.exports = {adminAuth,userAuth}