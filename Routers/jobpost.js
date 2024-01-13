// routes/uploadData.js
const express = require('express');
const router = express.Router();
const jobs = require('../model/Jobs'); // Adjust the path accordingly


router.post('/', async (req, res) => {
  const JobData=new jobs({
title:req.body.title,
company:req.body.company,
location:req.body.location,
category:req.body.category,
aboutCompany:req.body.aboutCompany,
aboutJob:req.body.aboutJob,
Whocanapply:req.body.Whocanapply,

perks:req.body.perks,
numberOfopning:req.body.numberOfopning,
CTC:req.body.CTC,
StartDate:req.body.StartDate,
Experience:req.body.Experience,
AdditionalInfo:req.body.AdditionalInfo,

})
await JobData.save().then((data)=>{
res.send(data)
}).catch((err)=>{
    console.error(err);
})
});
router.get('/', async (req, res) => {
  try {
    // Fetch all documents from the job collection
    const JobData = await jobs.find();

    res.status(200).json({data:JobData } );
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch a document by ID from the job collection
    const job = await jobs.findById(id);

    if (!job) {
      return res.status(404).json({ success: false, error: 'Job not found' });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


module.exports = router;
