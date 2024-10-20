const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/Dynamic_app",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
    

 }).then(() =>{
    console.log(`connection successful`);
 }).catch((e) => {
    console.log(e);
 })







