const passport = require('passport');
const dotenv = require('dotenv');

// Strategies
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// dotenv
dotenv.config();

passport.use(new GoogleStrategy({

},
  function() {

  }
));