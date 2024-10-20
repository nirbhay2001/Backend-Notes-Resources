/*

 1. The http.createServer() method includes request and response parameters which is supplied by Node.js.
 2. The request object can be used to get information about the current HTTP request e.g url, request header, and data.
 3. The response object can be used to send a response for a current HTTP request.
 4. If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:

*/
const http = require("http");
const server = http.createServer((req,res) => {
    res.end("Hello from the others sides thapa");
})

server.listen(8000,"127.0.0.1",() => {
    console.log("listening to the port no 8000");
});

