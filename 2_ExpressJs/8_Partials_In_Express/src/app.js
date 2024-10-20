const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs"); // partials folder ko use karne ke liye hbs ko require krna padta hai
const port = 8000;
 // built in middleware
 const staticPath = path.join(__dirname,"../public");
 const templatePath = path.join(__dirname,"../templates/views"
 ) // ye templates directory ke path ko represent kar ra ha hai
 const partialsPath = path.join(__dirname,"../templates/partials"); // ye partials directory ke path ko represent kar raha hai


// to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath); // es tarah se views directory ke nam ko change kar sakte hai; eska matlab hai ki ab mera ye template engine hai

hbs.registerPartials(partialsPath);

 app.use(express.static(staticPath));


 // template engine route

app.get("/about",(req,res) => {
    res.render("about");
})


 app.get("/",(req,res) => {
    res.render("index.hbs");
 });

app.listen(port,(req,res) => {
    console.log(`listening to the port ${port}`);
});