/*
    1. express framework sara data request object se nikalta hai
    2. request object me 4 method hota hai --> GET, POST, PUT, DELETE
    3. request object se hi headers ka information milta hai, Headers --> Cookie, Auth, Token
    4. request object se hi body ke data ko fetch kar sakte hai, body ke ander data json format me hoga ya to urlencoded format me hoga
    5. request object ki help se url me se data ko fetch kar sakte hai jo query string ke form me rhta hai, URL --> Query String, Params





*/

// Sending data in Request Object
// send data using Body , body ke help se jo data server per send karte hai wah data hidden hota hai, esko url se data ko nahi bhejte hai, jab signup and register ke time data ko hum body me bhejte hai , form ki help se
// body ke liye mostly post method ka use karte hai

const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

server.use(body-parseArgs.urlencoded()); // --> for form data
server.use(body-parseArgs.json()); // --> for JSON Data

server.post("/home", function(req,res){
    console.log(req.body); 
    res.send(req.body);
})


// POST localhost:8080/person
server.post("/person",(req,res)=>{
    let personName = request.body.name;
    let myAge = request.body.age;
    res.json({name:personName,age:myAge}); // eske jagah per yadi chahe to data ko show n k rake kisi aue page per render kara sakte hai

})



server.listen(8080, function(){
    console.log("server started");
})


