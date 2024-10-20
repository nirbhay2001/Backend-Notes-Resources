/*

 Streams 
    --> Streams are object that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four are types of streams - Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later
 Readable 
    --> Streams which is used for read operation.
 Writable
    --> Streams which is used for write operation.
 Duplex 
    --> Streams which can be used for both read and write operation.
 Transform 
    --> A type of duplex stream where the output is computed based on input.

 Each type of Streams is an EventEmitter instance and throws several events at different insatnce of times. For example, some of the commonly used events are -
    data --> This event is fired when there is no more data to read.

    end --> This event is fired when there is no more data to read.

    error --> This event is fired when there is any error receiving or writing data.

    finish --> This event is fired when all the data has been flushed to underlying system

*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req,res) => {
    
    fs.readFile("input.txt",(err,data) => {
        if(err) return console.log(err);
        res.end(data.toString());
    });
});

server.listen(8000,"127.0.0.1");

// ye tarika streaming tarika nahi hai data ko show karane ka, esme pahle data download huaa hai phir show huaa hai