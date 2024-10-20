const http = require("http");
const server = http.createServer((req,res) => {

    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the others sides thapa");
    }else if(req.url == "/about"){
        res.end("Hello from the AboutUS sides");
    }else if(req.url == "/contact"){
        res.end("Hello from the conatactUS sides");
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>404 error pages. Page doesn't exist</h1>");
    }
    
    
})

server.listen(8000,"127.0.0.1",() => {
    console.log("listening to the port no 8000");
});


