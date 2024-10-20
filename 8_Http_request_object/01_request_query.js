/*
    1. express framework sara data request object se nikalta hai
    2. request object me 4 method hota hai --> GET, POST, PUT, DELETE
    3. request object se hi headers ka information milta hai, Headers --> Cookie, Auth, Token
    4. request object se hi body ke data ko fetch kar sakte hai, body ke ander data json format me hoga ya to urlencoded format me hoga
    5. request object ki help se url me se data ko fetch kar sakte hai jo query string ke form me rhta hai, URL --> Query String, Params





*/

// Sending data in Request Object
// 1. Using URL --> Query String
// https://localhost/home?name=abhishek&age=30; Query String --> ?name=abhishek&age=30 // es tarah se bhi data ko server per send kar sakte hai

const express = require("express");
const server = express();

server.get("/home", function(req,res){
    console.log(req.query); // req.query --> ye express framework me ak inbuilt property hai, req.query me jo data ko bhej rahe hai express esko khud se hi esko access kar lega aur usko json format me convert kar dega
    // req.query --> ye mostly get request me hi use hota hai , kyuki get request me body nahi hota hai , ye bahut simple tarah ka request system hota hai
    // request.query --> ye ak method hai jisase data ko server per bhej sakte hai
    res.send(req.query);
})

server.get("/person", (req,res)=>{
    let personName = req.query.name;
    let age = req.query.age;
    res.json({name:personName,age});

    // localhost:8080/person?name=Nirbhay&age19
})

server.listen(8080, function(){
    console.log("server started");
})