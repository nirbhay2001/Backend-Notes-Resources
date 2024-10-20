const fs = require("fs");

fs.readFile('read.txt',"UTF-8",(err, data) => {
    console.log(data);
});