const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  medicalHistory: String,
  emergencyContacts: [String]
});

module.exports = mongoose.model("User", userSchema);