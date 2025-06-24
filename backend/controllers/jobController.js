const Job = require("../models/Job");

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
