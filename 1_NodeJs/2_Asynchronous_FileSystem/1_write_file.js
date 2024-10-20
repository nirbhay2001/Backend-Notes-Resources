const fs = require("fs");
fs.writeFile("read.txt","today is awesome day :)", (err)=>{
    console.log("files is created");
    console.log(err);

    // jabi Asynchronous FileSystem ko use karte hai to hamesha callback function ka use karna padta hai

    // yadi read.txt file nahi rahega to es nam se file ko create kar dega aur usme content ko write kar dega i.e today ia awesome day :)

});

/*

 1. We pass them a function as an argument - a callback - that gets called when that task completes.
 2. The callbacks has an argument that tells you whether the operation completed successfully.
 3. Now we need to say what to do when fs.writeFile has completed (even if it's nothing), and start checking for errors.

*/

