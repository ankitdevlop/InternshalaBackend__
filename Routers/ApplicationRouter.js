const express =require('express')

const router=express.Router();
const application=require("../model/Applications")

router.post('/',async(req,res)=>{
    const applicationData=new application({
        coverLetter:req.body.coverLetter,
        body:req.body.body,
        user:req.body.user,
        company:req.body.company,
        category:req.body.category,
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

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Fetch a document by ID from the application collection
      const application = await application.findById(id);
  
      if (!application) {
        return res.status(404).json({ success: false, error: 'application not found' });
      }
  
      res.status(200).json({ success: true, data: application });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  
module.exports=router

