
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/careerCatalystDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


const Job = require("./models/Job");


// Route: Add a New Job Posting
app.post("/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job posted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to post job" });
  }
});

// ✅ New Route: Fetch All Job Postings
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.status(200).json(jobs); // Send response with job data
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

const Student = require("./models/Student"); // Import Student Model

// ✅ Route to Fetch All Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// ✅ Route to Update Favorite Status of a Student
app.put("/students/:id/favorite", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Toggle favorite status
    student.isFavorite = !student.isFavorite;
    await student.save();

    res.json({ message: "Favorite status updated", student });
  } catch (error) {
    res.status(500).json({ error: "Failed to update favorite status" });
  }
});

const Recruiter = require("./models/Recruiter");

app.get("/recruiter/:id", async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.id)
      .populate("jobPostings")
      .populate("favoriteStudents");
    
    if (!recruiter) {
      return res.status(404).json({ error: "Recruiter not found" });
    }

    res.json(recruiter);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recruiter profile" });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
