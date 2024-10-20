const mongoose = require('mongoose');

const RightsSchema = new mongoose.Schema({
    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'staff'
    },
    right:{
        type:String
    }
},{
    timestamp:true
})

module.exports = mongoose.model('Right',RightsSchema);