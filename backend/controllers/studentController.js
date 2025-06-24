const Student = require("../models/Student");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendAssessment = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    student.assessmentsSent.push(req.body.assessmentId);
    await student.save();

    res.json({ message: "Assessment sent successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
