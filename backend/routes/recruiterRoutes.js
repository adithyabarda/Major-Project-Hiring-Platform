const express = require("express");
const Job = require("../models/Job");
const Student = require("../models/Student");

const router = express.Router();

// **1. Post a Job**
router.post("/post-job", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job posted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **2. Get All Jobs**
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **3. Get Favorite Students**
router.get("/students/favorites", async (req, res) => {
  try {
    const favoriteStudents = await Student.find({ isFavorite: true });
    res.json(favoriteStudents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **4. Get Filtered Students**
router.get("/students", async (req, res) => {
  try {
    let { minSolved, topic } = req.query;
    let filter = {};

    if (minSolved) filter.problemsSolved = { $gte: parseInt(minSolved) };
    if (topic && topic !== "All Topics") filter.mainTopic = topic;

    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// **5. Mark Student as Favorite**
router.post("/students/favorite/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    student.isFavorite = !student.isFavorite;
    await student.save();
    res.json({ message: "Student favorite status updated", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
