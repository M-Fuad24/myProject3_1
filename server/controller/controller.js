// controller.js
import multer from 'multer';
import path from 'path';

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Save files to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add a timestamp to the file name
  }
});

// Initialize multer with the storage settings for single or multiple files
const upload = multer({ storage });

// Handle single or multiple image uploads and send the file paths back to the client
const uploadImage = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded.');
  }

  // Create an array of file paths to return to the client
  const filePaths = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

  // Respond with the file paths
  res.send({ filePaths });
};

export { upload, uploadImage };
