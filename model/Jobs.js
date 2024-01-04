const mongoose=require("mongoose")
const JobsDataSchema=new mongoose.Schema({
title:String,
company:String,
location:String,
category:String,
aboutCompany:String,
aboutJob:String,
Whocanapply:String,

perks:Array,
numberOfopning:String,
CTC:String,
StartDate:String,
Experience:String,
AdditionalInfo:String,

})
module.exports=mongoose.model("jobsData",JobsDataSchema)