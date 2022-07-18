// import libraries
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./src/routes/api');

const app = express();

// Security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');

// Security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser
app.use(bodyParser.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 100,
  max: 3000,
});

// Database Connection
const URI =
  'mongodb+srv://username:password@test.f3g6t.mongodb.net/?retryWrites=true&w=majority';
const option = { user: 'username', pass: 'password', autoIndex: true };
mongoose.connect(URI, option, function (error) {
  if (!error) {
    console.log('Mongodb connection successful');
  } else {
    console.log(error);
  }
});

// Routing
app.use('/api/v1', router);

// Frontend routing
app.use(express.static('./client/build'));
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// undefined route
app.use('*', (req, res) => {
  res.status(404).json({ status: 'failed', data: 'Not Found' });
});

module.exports = app;
