const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  discordId: { type: String, required: true, unique: true },
  spins: { type: Number, default: 0 },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
