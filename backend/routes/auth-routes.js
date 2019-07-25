const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login route');
})

router.get('/logout', (req, res) => {
  res.send('Logout route');
})

module.exports = router;