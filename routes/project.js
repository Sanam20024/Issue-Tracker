// Import the 'express' library to create a router
const express = require('express');

// Create an instance of an Express router
const router = express.Router();

// Import the 'projectController' from the '../controllers/project_controller' module
const projectController = require('../controllers/project_controller');

// Define a route for creating a project using a POST request to '/create'
router.post('/create', projectController.create);

// Define a route for viewing a project by ID using a GET request to '/:id'
router.get('/:id', projectController.project);

// Define a route for creating an issue within a project using a POST request to '/:id'
router.post('/:id', projectController.createIssue);

// Export the router for use in other parts of the application
module.exports = router;
