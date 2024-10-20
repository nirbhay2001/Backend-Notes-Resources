const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs"); // partials folder ko use karne ke liye hbs ko require krna padta hai
const requests = require("requests");
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
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&Units=metric&appid=435241c529cb9b11c2ebf10a09515ee2`)
    .on("data",(chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(`city nae is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        res.write(arrData[0].name);

    })
    .on("end",(err) => {
        if(err) return console.log("connection closed due to errors",err);
        res.end();
    })
})


 app.get("/",(req,res) => {
    res.render("index.hbs");
 });



app.listen(port,(req,res) => {
    console.log(`listening to the port ${port}`);
});

// http://localhost:8000/about?name=pune es tarah se url dalna hai