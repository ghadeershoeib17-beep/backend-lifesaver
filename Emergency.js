const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    latitude: Number,
    longitude: Number
  },
  status: { type: String, default: 'Pending' }, // Pending, Responded, Resolved
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Emergency', emergencySchema);