// index.js
import express from 'express';
import path from 'path';
import cors from 'cors'; // Import CORS
import router from './routes/routes.js'; // Adjust the path based on your file structure

const app = express();
const PORT = 3001;

// Enable CORS for cross-origin requests
app.use(cors());

// Serve static files from the 'uploads' directory (for the images)
app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')));

// Use the router for handling the API upload route
app.use('/api', router); // Prefix all routes with '/api'

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
