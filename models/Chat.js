const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    streamId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    message: { type: String, required: true },
    emoji: { type: String, required: false },
    isBanned: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

chatSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
