const express = require("express");
const path = require("path");
const app = express();
// const ejs = require("ejs");
const hbs = require("hbs")
const routes = require('./routes/main')
const bodyParser = require('body-parser')
const connectToMongo=require("./db/conn");
const Detail = require("./models/Details")
const port = process.env.PORT || 5000;

 connectToMongo();

 const static_path = path.join(__dirname,"../public");
    // console.log(path.join(__dirname,"../public"));

// const template_path = path.join(__dirname,"../template/views");

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('',routes)
app.use(express.static(static_path))



// app.set("view engine","ejs");
// app.set('views', './views');
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


app.listen(port,()=>{
    console.log(`Server is running at port no ${port};`)
})