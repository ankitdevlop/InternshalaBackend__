const mongoose=require("mongoose")
const InternshipSchema=new mongoose.Schema({
title:String,
company:String,
location:String,
category:String,
aboutCompany:String,
aboutJob:String,
Whocanapply:String,
perks:Array,
numberOfopning:String,
stipend:String,
StartDate:String,
Duration:String,
AdditionalInfo:String,
createdAt:{
    type:Date,
    default:Date.now,
},
})
module.exports=mongoose.model("InternShipData",InternshipSchema)