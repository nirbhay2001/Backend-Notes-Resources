const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String
    }
},{
    timestamp:true
})

module.exports = mongoose.model('staff',staffSchema);