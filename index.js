// Load environment variables from a .env file
require('dotenv').config();

// Import the Express.js framework
const express = require('express');

// Import the MongoDB database connection configuration
const db = require('./config/mongoose');

// Import the Mongoose library for MongoDB interactions
const mongoose = require('mongoose');

// Define the port number for the web server, using the provided value or default to 8000
const port = process.env.PORT || 8000;

// Create an instance of the Express application
const app = express();

// Import the 'path' module for handling file paths
const path = require('path');

// Import the 'express-ejs-layouts' module for view layouts
const expressLayouts = require('express-ejs-layouts');

// Use middleware to parse incoming form data
app.use(express.urlencoded());

// Serve static files (e.g., styles, images) from the 'assets' directory
app.use(express.static('assets'));

// Configure Express to use EJS view layouts
app.use(expressLayouts);

// Extract styles and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set up the view engine as EJS and specify the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Use Express Router to handle routes defined in the 'routes' module
app.use('/', require('./routes'));

// Start the server on the specified port
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
