const express =require('express')

const router=express.Router();
const application=require("../model/Applications")

router.post('/',async(req,res)=>{
    const applicationData=new application({
        coverLetter:req.body.coverLetter,
        body:req.body.body,
        user:req.bo.user,
        company:body.company,
        category:bo.category,
  
        ApplicationId:req.body.ApplicationId
    })
    await applicationData.save().then((data)=>{
res.send(data)
    }).catch((err)=>{
        console.error(err);
    })
})

router.get('/', async (req, res) => {
    try {
      const data = await application.find();
      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports=router

