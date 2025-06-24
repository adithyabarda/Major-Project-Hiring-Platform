import express from "express";
import Assessment from "../models/Assessment.js";

const router = express.Router();

// Create an Assessment
router.post("/create", async (req, res) => {
  const { title, questions, createdBy } = req.body;
  try {
    const newAssessment = new Assessment({ title, questions, createdBy });
    await newAssessment.save();
    res.status(201).json({ message: "Assessment created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Assessments
router.get("/", async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.json(assessments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Assessment
router.get("/:id", async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ message: "Assessment not found" });
    res.json(assessment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
