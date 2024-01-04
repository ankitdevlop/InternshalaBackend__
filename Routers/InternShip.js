// routes/uploadData.js
const express = require('express');
const router = express.Router();
const Internship = require('../model/Interships'); // Adjust the path accordingly
const dataToUpload = require('../uploadData/InternshipDatAvl'); // Adjust the path accordingly

router.post('/', async (req, res) => {
  try {
    // Use the data from the external file
    const result = await Internship.insertMany(dataToUpload);

    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.get('/', async (req, res) => {
  try {
    // Fetch all documents from the Internship collection
    const internshipData = await Internship.find();

    res.status(200).json({ success: true, data: internshipData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Fetch a document by ID from the Internship collection
    const internship = await Internship.findById(id);

    if (!internship) {
      return res.status(404).json({ success: false, error: 'Internship not found' });
    }

    res.status(200).json({ success: true, data: internship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


module.exports = router;
