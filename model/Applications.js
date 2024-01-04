const mongoose=require("mongoose")
const applicationSchema=new mongoose.Schema({
    
    company:String,
    category:String,
    coverLetter:String,
    createdAt:{
        type:Date,
        default:Date.now,
    },
    ApplicationId:Object,
    user:Object,
})
module.exports=mongoose.model("Application",applicationSchema)