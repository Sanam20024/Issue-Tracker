// Import the 'Project' and 'Issue' models from their respective modules
const Project = require('../models/project');
const Issue = require('../models/issue');

// Import the 'findById' method from the 'Project' model module
const { findById } = require('../models/project');

// Controller to create a new project for the user
module.exports.create = async function (req, res) {
  try {
    // Create a new project by inserting data from the request body
    await Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });

    // Redirect the user back after project creation
    return res.redirect('back');
  } catch (err) {
    // If an error occurs, log the error message to the console and redirect back
    console.log(err);
    return res.redirect('back');
  }
};

// Controller to find a project and display it in the project page
module.exports.project = async function (req, res) {
  try {
    // Find a project by its ID and populate its 'issues' field
    let project = await Project.findById(req.params.id).populate({
      path: 'issues',
    });

    if (project) {
      // Render the 'project_page' view with the project data and a title
      return res.render('project_page', {
        title: 'Project Page',
        project,
      });
    }
    // If the project is not found, redirect back
    return res.redirect('back');
  } catch (err) {
    // If an error occurs, log the error message to the console and redirect back
    console.log(err);
    return res.redirect('back');
  }
};

// Controller to create a new issue
module.exports.createIssue = async function (req, res) {
  try {
    // Find the project by its ID
    let project = await Project.findById(req.params.id);

    if (project) {
      // Create a new issue using data from the request body
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });

      // Add the newly created issue to the project's 'issues' array
      project.issues.push(issue);

      // Check if labels are an array or a single string
      if (!(typeof req.body.labels === 'string')) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }

      // Save the updated project
      await project.save();

      // Redirect the user back
      return res.redirect(`back`);
    } else {
      // If the project is not found, redirect back
      return res.redirect('back');
    }
  } catch (err) {
    // If an error occurs, redirect the user back
    return res.redirect('back');
  }
};
