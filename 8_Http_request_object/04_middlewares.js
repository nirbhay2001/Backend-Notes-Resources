// middlewares ak arrangement hai ya ye ak aisa part hai jo server me request ko process karte hai

/*

    Useful Middleware
    body-parser --> for request body data parsing
    express.static --> for static file hosting
    morgan --> for logging server req/res data
    session --> for session management


*/


const express = require("express");
const server = express();

server.use(function(req,res,next){
    // modify req here
    next(); // call next middleware
})


server.listen(8080, function(){
    console.log("server started");
})