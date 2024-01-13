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
      const Application = await application.findById(id);
  
      if (!Application) {
        return res.status(404).json({ success: false, error: 'application not found' });
      }
  
      res.status(200).json({ success: true, data: Application });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

  // Updating Stauts
  
// Update application status
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  try {
    let status;

    if (action === 'accept') {
      status = 'accepted';
    } else if (action === 'reject') {
      status = 'rejected';
    } else {
      return res.status(400).json({ success: false, error: 'Invalid action' });
    }

    // Update the application status
    const updatedApplication = await application.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );

    if (!updatedApplication) {
      return res.status(404).json({ success: false, error: 'Application not found' });
    }

    res.status(200).json({ success: true, data: updatedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


  // For Specific User 
  router.get('/user/:userId', async (req, res) => {
    const userId = req.params.uid;

    try {
        const userApplications = await application.find({ user: userId });

        if (!userApplications || userApplications.length === 0) {
            return res.status(404).json({ success: false, error: 'No applications found for the user' });
        }

        res.status(200).json({ success: true, data: userApplications });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

  
module.exports=router

