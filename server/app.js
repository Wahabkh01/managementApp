
// Import necessary modules
const express = require('express');
const mongoose = require('./connection'); // Import mongoose instance from db.js
const regRouter = require("./routes/registration.js");

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(regRouter);

// Start server and listen on the specified port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
