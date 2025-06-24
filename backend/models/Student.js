const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  problemsSolved: { type: Number, required: true },
  mainTopic: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  isFavorite: { type: Boolean, default: false },
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter", required: true }, 
  profileLink: { type: String }, // Link to student's profile
});

module.exports = mongoose.model("Student", studentSchema);
