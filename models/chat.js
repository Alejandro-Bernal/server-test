const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatRoom', schema);