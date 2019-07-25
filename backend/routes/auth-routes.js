const express = require('express');
const router = express.Router();

// Passport imports
const passport = require('passport');

router.get('/login', (req, res) => {
  res.send('Login route');
})

router.get('/logout', (req, res) => {
  res.send('Logout route');
})


// Google auth route
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

//Google auth callback route
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
  res.send('google callback');
})

module.exports = router;