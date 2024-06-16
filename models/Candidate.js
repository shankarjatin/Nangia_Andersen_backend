const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobRole: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  savedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Candidate', CandidateSchema);
