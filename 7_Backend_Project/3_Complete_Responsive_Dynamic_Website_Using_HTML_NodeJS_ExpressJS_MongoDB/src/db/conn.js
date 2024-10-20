const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/thapadynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
    // useFindAndModify:false
    

 }).then(() =>{
    console.log(`connection successful`);
 }).catch((e) => {
    console.log("No connection");
 })
