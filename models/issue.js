// Import the 'mongoose' library to define the schema and model
const mongoose = require('mongoose');

// Define an 'issueSchema' using Mongoose's Schema class
const issueSchema = new mongoose.Schema(
  {
    // Define the 'title' field as a String with trimming and a required constraint
    title: {
      type: String,
      trim: true,
      required: true,
    },
    // Define the 'description' field as a String with trimming and a required constraint
    description: {
      type: String,
      trim: true,
      required: true,
    },
    // Define the 'author' field as a String with trimming and a required constraint
    author: {
      type: String,
      trim: true,
      required: true,
    },
    // Define the 'labels' field as an array of Strings with trimming and a required constraint
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },
  {
    // Enable automatic timestamps for 'createdAt' and 'updatedAt' fields
    timestamps: true,
  }
);

// Create a Mongoose model named 'Issue' using the 'issueSchema'
const Issue = mongoose.model('Issue', issueSchema);

// Export the 'Issue' model for use in other parts of the application
module.exports = Issue;
