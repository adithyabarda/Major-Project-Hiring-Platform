const Recruiter = require("../models/Recruiter");
const Student = require("../models/Student");

exports.getRecruiterProfile = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.recruiterId).populate("favoriteStudents");
    res.json(recruiter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addFavoriteStudent = async (req, res) => {
  try {
    const recruiter = await Recruiter.findById(req.params.recruiterId);
    const student = await Student.findById(req.params.studentId);

    if (!recruiter || !student) return res.status(404).json({ message: "Not Found" });

    recruiter.favoriteStudents.push(student._id);
    await recruiter.save();

    res.json({ message: "Student added to favorites" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
