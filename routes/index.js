// Import the 'express' library to create a router
const express = require('express');

// Create an instance of an Express router
const router = express.Router();

// Import the 'homeController' from the '../controllers/home_controller' module
const homeController = require('../controllers/home_controller');

// Log a message to indicate that the router has been loaded
console.log('router loaded');

// Define a route for the root URL ('/') and specify the 'home' controller function to handle it
router.get('/', homeController.home);

// Use the 'project' sub-router to handle routes starting with '/project'
router.use('/project', require('./project'));

// Export the router for use in other parts of the application
module.exports = router;
