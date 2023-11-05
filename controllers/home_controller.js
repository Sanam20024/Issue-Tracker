// Import the 'Project' model from the '../models/project' module
const Project = require('../models/project');

// Define and export the 'home' controller as an asynchronous function
module.exports.home = async function (req, res) {
  try {
    // Use the 'Project' model to find all projects and sort them by the 'createdAt' field in descending order
    let projects = await Project.find({}).sort('-createdAt');

    // Render the 'home' view with the project data and a title
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch {
    // If an error occurs, log the error message to the console (note: 'err' should be defined as an argument)
    console.log('Error', err);

    // Return without sending a response; this allows the error to be handled elsewhere
    return;
  }
};
