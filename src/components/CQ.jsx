import React, { useState } from 'react';
import axios from 'axios';

const questions = [
  { id: 1, question: "What is a variable in programming?" },
  { id: 2, question: "Explain the difference between a list and a tuple in Python." },
  { id: 3, question: "What is the purpose of a loop in programming?" },
  { id: 4, question: "Describe the use of an if-else statement." },
  { id: 5, question: "What is a class in OOP?" },
  { id: 6, question: "Explain the concept of inheritance." },
  { id: 7, question: "What is a stack?" },
  { id: 8, question: "How does a hash table work?" },
  { id: 9, question: "What is the purpose of HTML?" },
  { id: 10, question: "What is the difference between client-side and server-side scripting?" },
  { id: 11, question: "What is SQL?" },
  { id: 12, question: "Explain the difference between a primary key and a foreign key." },
  { id: 13, question: "What is Git?" },
  { id: 14, question: "What is a branch in Git?" },
  { id: 15, question: "What is the purpose of an algorithm?" },
  { id: 16, question: "Explain the difference between linear and binary search algorithms." },
  { id: 17, question: "What is Agile development?" },
  { id: 18, question: "What is unit testing?" },
  { id: 19, question: "What is machine learning?" },
  { id: 20, question: "What is the purpose of a neural network?" }
];

const CQ = () => {
  const [fileUploads, setFileUploads] = useState(Array(questions.length).fill(null)); // State for uploaded files
  const [uploadMessages, setUploadMessages] = useState(Array(questions.length).fill('')); // State for upload messages

  // Handle file selection for each question
  const handleFileChange = (index, event) => {
    const files = [...fileUploads];
    files[index] = event.target.files[0];
    setFileUploads(files);
  };

  // Handle form submission for each question
  const handleUpload = async (index, event) => {
    event.preventDefault(); // Prevent page reload
    const selectedFile = fileUploads[index];
    if (!selectedFile) {
      setUploadMessages(prevMessages => {
        const newMessages = [...prevMessages];
        newMessages[index] = 'Please select a file to upload.';
        return newMessages;
      });
      return;
    }

    const formData = new FormData();
    formData.append('images', selectedFile); // Correct field name to match backend

    try {
      const response = await axios.post('http://localhost:3001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadMessages(prevMessages => {
        const newMessages = [...prevMessages];
        newMessages[index] = `File uploaded successfully: ${response.data.filePath}`;
        return newMessages;
      });
    } catch (error) {
      setUploadMessages(prevMessages => {
        const newMessages = [...prevMessages];
        newMessages[index] = 'File upload failed.';
        return newMessages;
      });
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="mt-6 p-6 border rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Upload Image for Each Question</h3>
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
          <p className="font-semibold text-lg text-gray-700">{`${q.id}. ${q.question}`}</p>
          <form onSubmit={(event) => handleUpload(index, event)} className="mt-4">
            <input
              type="file"
              onChange={(event) => handleFileChange(index, event)}
              accept="image/*"
              className="mb-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 transition"
            >
              Upload
            </button>
          </form>
          {uploadMessages[index] && <p className="mt-2 text-sm text-red-600">{uploadMessages[index]}</p>} {/* Show upload message */}
        </div>
      ))}
    </div>
  );
};

export default CQ;
