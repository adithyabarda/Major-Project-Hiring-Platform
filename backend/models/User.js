import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totalSolved: { type: Number, default: 0 },
  solvedByTags: { type: Object, default: {} },
  rating: { type: Number, default: 0 },
  previousAssessments: { type: Number, default: 0 },
  pendingAssessments: { type: Number, default: 0 },
  metrics: { type: Object, default: {} },
});

export default mongoose.model("User", userSchema);
