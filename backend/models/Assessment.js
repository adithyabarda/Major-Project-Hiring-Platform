const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  status: { type: String, enum: ["Pending", "Completed", "Rejected"], default: "Pending" },
});

module.exports = mongoose.model("Assessment", assessmentSchema);
