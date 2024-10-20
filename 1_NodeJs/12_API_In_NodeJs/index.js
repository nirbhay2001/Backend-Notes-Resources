const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => {

    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the others sides thapa");
    }else if(req.url == "/about"){
        res.end("Hello from the AboutUS sides");
    }else if(req.url == "/contact"){
        res.end("Hello from the conatactUS sides");
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data) => {
            res.writeHead(200,{"content-type": "application/json"});
            console.log(data);
            
            const objdata = JSON.parse(data);
            res.end(objdata.data[0].attributes.title);
        });
        
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>404 error pages. Page doesn't exist</h1>");
    }
    
    
})

server.listen(8000,"127.0.0.1",() => {
    console.log("listening to the port no 8000");
});