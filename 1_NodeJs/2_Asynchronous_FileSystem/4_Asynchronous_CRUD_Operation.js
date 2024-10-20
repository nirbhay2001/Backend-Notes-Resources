/*
Challenge Time
   1: create a folder named it Thapa
   2: Create a file in it named boi.txt and data into it.
   3: Add more data into the file at the end of the existing data.
   4: Read the data without getting the buffer data at first.
   5: Rename the file name to mybio,txt
   6: now delete both the file and the folder
*/

// create a folder named it Thapa
const fs = require('fs');
fs.mkdir("Mohit",(err)=>{
   console.log("folder created");
})

// Create a file in it named boi.txt and data into it.
fs.writeFile("./Mohit/bio.txt","my name is vinod thapa",(err)=>{
   console.log("files created");
});

// Add more data into the file at the end of the existing data
fs.appendFile("./Mohit/bio.txt",' Plz like and share my videos',(err)=>{
   console.log("files data appended");
});

// Read the data without getting the buffer data at first.
fs.readFile("./Mohit/bio.txt",'utf-8',(err,data)=>{
   console.log(data);
});

// Rename the file name to mybio,txt
fs.rename("./Mohit/bio.txt","./Mohit/myBio.txt",(err)=>{
   console.log("rename done");
});

// now delete both the file and the folder
fs.unlink("./Mohit/myBio.txt",(err)=>{
   console.log("file deleted");
});
fs.rmdir("./Mohit",(err)=>{
   console.log("folder is deleted");
});
