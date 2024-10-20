const express = require("express");
const path = require("path");
const app = express();

const port = 8000;
 // built in middleware
 const staticPath = path.join(__dirname,"../public");

// to set the view engine
app.set("view engine","hbs");

 app.use(express.static(staticPath));


 // template engine route
 app.get("/",(req,res) => {
    res.render("index.hbs");
 });

app.listen(port,(req,res) => {
    console.log(`listening to the port ${port}`);
});