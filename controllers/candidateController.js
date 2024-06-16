const Candidate = require('../models/Candidate');

exports.searchCandidates = async (req, res) => {
  const { location, jobRole } = req.query;
  try {
    const candidates = await Candidate.find({ location, jobRole });
    res.json(candidates);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
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
