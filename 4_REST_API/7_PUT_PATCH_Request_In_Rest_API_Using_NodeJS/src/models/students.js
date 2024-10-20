const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    
    email : {
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
    
})

// We will create a new collection
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student; // esame es file ko export nahi kiya hai , esame collection ko export kiya hai