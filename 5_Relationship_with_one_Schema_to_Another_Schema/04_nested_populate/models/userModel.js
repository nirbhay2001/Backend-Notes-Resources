const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    posts: [{type: mongoose.Types.ObjectId,ref:'post'}]

    // posts ak objectId ka array hai jiske ander sare post ka objectId store hoga
});

module.exports = mongoose.model('user',userSchema);