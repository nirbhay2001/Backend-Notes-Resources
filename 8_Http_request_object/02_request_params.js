/*
    1. express framework sara data request object se nikalta hai
    2. request object me 4 method hota hai --> GET, POST, PUT, DELETE
    3. request object se hi headers ka information milta hai, Headers --> Cookie, Auth, Token
    4. request object se hi body ke data ko fetch kar sakte hai, body ke ander data json format me hoga ya to urlencoded format me hoga
    5. request object ki help se url me se data ko fetch kar sakte hai jo query string ke form me rhta hai, URL --> Query String, Params





*/

// Sending data in Request Object
// 2. data send server side using URL; URL --> URL params
// https://localhost/home/abhishek/30
// server path  /home/:name/:age

const express = require("express");
const server = express();

server.get("/home/:name/:age", function(req,res){
    console.log(req.params); 
    res.send(req.params);
})

server.get("/school/:name/:city", (req,res)=>{
    let schoolName = req.params.name;
    let city = req.params.city;
    res.json({name:schoolName,city});

    // localhost:8080/school/IIT/Delhi
})

server.listen(8080, function(){
    console.log("server started");
})