const express = require("express");
const { getAllJobs, getJobDetails } = require("../controllers/jobController");

const router = express.Router();

router.get("/", getAllJobs);
router.get("/:jobId", getJobDetails);

module.exports = router;
