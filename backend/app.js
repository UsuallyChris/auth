const express = require('express');
const app = express();
const dotenv = require('dotenv');

// dotenv
dotenv.config();

// Passport Imports and Configs
const passportSetup = require('./config/passport-setup');


// Route Imports
const auth = require('./routes/auth-routes');

// Route Configs
app.use('/api/auth/', auth);

const PORT = 5000;
app.listen(PORT);