/*
Node.Js Core Module
    Consider module to be the same as JavaScript libraries. A set of function you want to include in your application.

    Node>js has a set of built-in modules which you can use without any further installation.
*/

// const name = "thapa";
// console.log(name);

const fs = require("fs");
// Creating a new file
// fs.writeFileSync('read1.txt',"welcome to my channel");
// fs.writeFileSync('read1.txt',"thapa technical, welcome to my channel");

// fs.appendFileSync("read1.txt", " How are you I am fine thank you : )" )


const buf_data = fs.readFileSync("read1.txt");
// console.log(buf_data);

// Node.js includes an additional data type called Buffer
// (not available in browser's javaScript).
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packrts over the network.

/*
<Buffer 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 48 6f 77 20 61 72 65 20 79 6f 75 ... 24 more bytes> 
*/

org_data = buf_data.toString();
console.log(org_data);

// to rename the file
fs.renameSync('read1.txt', 'readwrite.txt');