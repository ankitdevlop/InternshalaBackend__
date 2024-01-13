const express=require("express")

const router=express.Router()
const  Application=require("./ApplicationRouter")
const  jobpost=require("./jobpost")
const  InternShipPost=require("./InternShip")
const Admin =require("./Admin")

router.get('/',(res,req)=>{
    res.send("welcome to InternShala")
})
router.use('/application',Application)
router.use('/job',jobpost)
router.use('/admin',Admin)
router.use('/intern',InternShipPost)

module.exports=router;