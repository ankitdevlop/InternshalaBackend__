// adminRoutes.js
const express = require('express');

const router = express.Router();


const adminUsername = 'admin';
const adminPassword = 'admin';

// Admin login route
router.post('/loginAdmin', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    res.send('Admin login successful!');
  } else {
    res.status(401).send('Unauthorized');
  }
});

module.exports = router;
