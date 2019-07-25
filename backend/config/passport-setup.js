const passport = require('passport');

// Strategies
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Keys Imports
const keys = require('./keys');

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
},
  function() {

  }
));