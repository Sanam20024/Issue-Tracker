// Import the 'mongoose' library to define the schema and model
const mongoose = require('mongoose');

// Define a 'projectSchema' using Mongoose's Schema class
const projectSchema = new mongoose.Schema(
  {
    // Define the 'name' field as a String with trimming and a required constraint
    name: {
      type: String,
      trim: true,
      required: true,
    },
    // Define the 'description' field as a String with a required constraint
    description: {
      type: String,
      required: true,
    },
    // Define the 'author' field as a String with a required constraint
    author: {
      type: String,
      required: true,
    },
    // Define the 'issues' field as an array of ObjectIds referencing the 'Issue' model
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
    // Define the 'labels' field as an array of Strings
    labels: [
      {
        type: String,
      },
    ],
  },
  {
    // Enable automatic timestamps for 'createdAt' and 'updatedAt' fields
    timestamps: true,
  }
);

// Create a Mongoose model named 'Project' using the 'projectSchema'
const Project = mongoose.model('Project', projectSchema);

// Export the 'Project' model for use in other parts of the application
module.exports = Project;
