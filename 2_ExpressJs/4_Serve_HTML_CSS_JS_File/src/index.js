/*

 Serving static files in Express
    --> To serve static such as images, css files and JavaScript files, use the express.static built-in middleware function in Express.

*/
const path = require("path");
const express = require("express");
const app = express();

// relative path
// absolute path --> hamesha hum es path ka use karte hai
// console.log(__dirname); // C:\Users\Nirbhay Gupta\Desktop\Web_Development\8_Backend_programming\2_ExpressJs\4_Serve_HTML_CSS_JS_File\src> ye src folder tak ka path dega

// public folder tak pahuchane ke liye hame join method ka use karna padega

// console.log(path.join(__dirname,"../public"));
// .. --> esase current folder se bahar aa jate hai i.e src folder se bahr aa jate hai aur /public se pubic folder ke ander chale jate hai

const staticPath = path.join(__dirname,"../public");


// builtin middleware
app.use(express.static(staticPath));




app.listen(8000, () => {
    console.log("listing the port at 8000");
})