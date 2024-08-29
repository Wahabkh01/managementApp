const mongoose = require('mongoose');

// Define the schema for the student registration form
const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  }
});

// Create a Mongoose model based on the schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
