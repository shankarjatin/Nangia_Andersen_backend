const Candidate = require('../models/Candidate');

exports.searchCandidates = async (req, res) => {
    try {
        let query = {};
        if (req.query.location) {
          query.location = req.query.location;
        }
        if (req.query.jobRole) {
          query.jobRole = req.query.jobRole;
        }
        const candidates = await Candidate.find(query);
        res.json(candidates);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
      }
};

exports.saveCandidate = async (req, res) => {
  const { name, location, jobRole, experience } = req.body;
  try {
    const newCandidate = new Candidate({ name, location, jobRole, experience, savedBy: req.user.id });
    const candidate = await newCandidate.save();
    res.json(candidate);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
