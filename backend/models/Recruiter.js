const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  company: { type: String, required: true },
  jobPostings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }], // List of job postings
  favoriteStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], // Favorite students
  metrics: {
    totalJobPostings: { type: Number, default: 0 },
    candidatesAssessed: { type: Number, default: 0 },
    hiredCandidates: { type: Number, default: 0 },
    avgApplicantsPerJob: { type: Number, default: 0 },
    interviewSuccessRate: { type: String, default: "0%" },
    avgTimeToHire: { type: String, default: "0 days" },
    pendingInterviews: { type: Number, default: 0 },
    rejectedCandidates: { type: Number, default: 0 },
    offersAccepted: { type: Number, default: 0 },
    totalAssessmentsSent: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("Recruiter", recruiterSchema);
