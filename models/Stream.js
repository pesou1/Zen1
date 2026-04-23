const mongoose = require('mongoose');

const StreamSchema = new mongoose.Schema({
    streamerId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    isLive: { type: Boolean, default: false },
    streamKey: { type: String, required: true },
    viewerCount: { type: Number, default: 0 },
    rtmpUrl: { type: String, required: true },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}, { timestamps: true });

module.exports = mongoose.model('Stream', StreamSchema);