const express = require('express');
const Student = require('../Model/student'); // Import the Student model

const router = express.Router();

// Route to register a new student
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body; // Destructure the student data from the request body

    // Create a new student instance with the data
    const student = new Student({
      firstName,
      lastName,
      email
    });

    // Save the student to the database
    await student.save();

    // Send a success response
    res.status(201).json({
      message: 'Student registered successfully',
      student: student
    });
  } catch (error) {
    // Handle any errors during insertion
    res.status(400).json({
      message: 'Error registering student',
      error: error.message
    });
  }
});

module.exports = router;
