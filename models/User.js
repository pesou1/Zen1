const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['SUPER_ADMIN', 'ADMIN', 'STREAMER', 'USER'], default: 'USER' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);