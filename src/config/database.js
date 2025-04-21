const mongoose = require("mongoose")





const connectDB =async () => {

    await mongoose.connect("mongodb+srv://devanshsingh1909:HbBh6gUt1P0HSEGn@cluster0.su4zl5y.mongodb.net/devTinder")
    
}




module.exports = connectDB


