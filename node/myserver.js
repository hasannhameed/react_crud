import express from "express";
import dotenv from "dotenv";

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Use the port from .env or default to 3000

// Serve a simple response
app.get("/", (req, res) => {
  res.status(200).send("<h1>hello hasan</h1>");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
