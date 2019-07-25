const express = require('express');
const app = express();

const PORT = 5000;

// Route Imports
const auth = require('./routes/auth-routes');

// Route Configs
app.use('/api/auth/', auth);

app.listen(PORT);