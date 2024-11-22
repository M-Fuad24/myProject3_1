// routes.js
import express from 'express';
import { upload, uploadImage } from '../controller/controller.js'; // Adjust path accordingly

const router = express.Router();

// Define the POST route for image upload
// 'images' is the field name from the frontend where multiple files are passed
router.post('/upload', upload.array('images', 10), uploadImage);

export default router;
