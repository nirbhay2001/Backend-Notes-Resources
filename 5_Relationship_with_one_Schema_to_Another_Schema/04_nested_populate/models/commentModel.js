const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: String,
    author: {type: mongoose.Types.ObjectId,ref:'User'}
});

module.exports = mongoose.model('Comment',commentSchema);