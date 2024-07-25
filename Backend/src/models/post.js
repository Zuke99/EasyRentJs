const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    userId: { type: mongoose.Types.ObjectId },
    title: { type: String },
    specification: { type: String },
    description: { type: String },
    dailyPrice: { type: Number },
    weeklyPrice: { type: Number },
    monthlyPrice: { type: Number },
    depositAmount: { type: Number },
    category: { type: String },
    city: { type: String },
    state: { type: String },
    locality: { type: String },
}, { collection: 'Post' });

module.exports = mongoose.model('Post', schema);