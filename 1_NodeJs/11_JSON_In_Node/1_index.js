/*

 1. JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.
 2. JSON is often used when data is sent from a server to a web page.

*/
const fs = require("fs");
const bioData = {
    name: "vinod",
    age: 26,
    channel: "thapa technical"
};

/*
console.log(bioData.channel);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
*/

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData,(err) => {
    console.log('done');
});

fs.readFile("json1.json","utf-8",(err,data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});