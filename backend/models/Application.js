import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    resume: { type: String, required: true }, // URL to resume file
    coverLetter: { type: String },
    status: { type: String, enum: ["Pending", "Reviewed", "Accepted", "Rejected"], default: "Pending" },
    appliedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
