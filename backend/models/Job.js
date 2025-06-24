const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  jobId: { type: String, unique: true, required: true },
  companyName: { type: String, required: true },
  description: { type: String, required: true },
  skillsRequired: { type: [String], required: true }, // Array for multiple skills
  salary: { type: String, required: true },
  datePosted: { type: Date, default: Date.now },
  applicants: { type: Number, default: 0 },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter", required: true },
});

module.exports = mongoose.model("Job", jobSchema);
