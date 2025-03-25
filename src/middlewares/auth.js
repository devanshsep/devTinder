const adminAuth = (req,res,next)=>{

    console.log("fetch the token")

    const authToken = 'xyz'
    const isAdminAuthorized = authToken === "xyz"

    if (!isAdminAuthorized){
        res.status(401).send('Unauthorized Access')
    }
    else{
        next()
    }

     
}

const UserAuth = (req,res,next)=>{

    console.log("fetch the token")

    const authToken = 'xyzggg'
    const isAdminAuthorized = authToken === "xyz"

    if (!isAdminAuthorized){
        res.status(401).send('Unauthorized Access')
    }
    else{
        next()
    }

     
}

module.exports = {adminAuth,UserAuth}