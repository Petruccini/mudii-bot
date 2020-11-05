const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    id: String,
    nickname: String,
    messages: Number
  });


module.exports = mongoose.model("Member", memberSchema)