const express = require("express");
const { getAllStudents, sendAssessment } = require("../controllers/studentController");

const router = express.Router();

router.get("/", getAllStudents);
router.post("/:studentId/assessment", sendAssessment);

module.exports = router;
