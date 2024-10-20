/*

 What is Express.Js
    --> Express.js is a Node.js framework. it's the most popular framework as of now (the most starred on NPM).
    --> ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.

 Why do we actually need Express.js? How it is useful for us to use with Node.js?
    --> Try to write a small REST API server in plain Node.js(that is, using only core modules) and then in Express.js . The latter will take you 5-10x less time and lines of code.
*/

const express = require("express");
const app = express(); // app ke ander bahut sara method and properties aa gaya hai jisko use karke easily work kar sakte hai



/*

 // app.get(route, callback);

 The callback function has 2 parameters request(req) and response(res) :
   1. The request object(req) represent the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc.
   2. similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.

  e.g app.get('/',(req,res) => {
   '/' --> represent home page
   www.thapatechnical.com --> jab es url ko chrome browser per dalte hai to esase us website ka home page khulta hai kyuki ye domain home page ko hi represent karta hai

   https://www.youtube.com/watch?v=AX1AP83CuK4&ab_channel=ThapaTechnical --> https://www.youtube.com ye youtube ke home page ko represent kar raha hai

  })

 get --> read
 post --> create
 put --> update
 delete --> delete

*/

app.get('/', (req,res) => {
   res.send("hello world from the express");
   // nodejs me send ke jagah per end ka use karte hai
})

app.get('/about',(req,res) => {
   res.send("hello world from the About page");
})

app.listen(8000, () => {
   console.log("listing the port at 8000");
});