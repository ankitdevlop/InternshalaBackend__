// routes/uploadData.js
const express = require('express');
const router = express.Router();
const jobs = require('../model/Jobs'); // Adjust the path accordingly
const dataToUpload = require('../uploadData/JobsDataAvl'); // Adjust the path accordingly

router.post('/', async (req, res) => {
  try {
    // Use the data from the external file
    const result = await jobs.insertMany(dataToUpload);

    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
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
