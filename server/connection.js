// Import mongoose
const mongoose = require('mongoose');

// Your MongoDB connection string
const dbURI = 'mongodb+srv://wahab8761aw:6r1nDm3SYwOm74Ll@cluster0.lanh4.mongodb.net/managementSysten?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(dbURI )

.then(() => {
  console.log('Connected to MongoDB successfully!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Export the mongoose connection to use it in other files
module.exports = mongoose;
