// www.thapa.com --> Welcome to my home page
// /about --> Welcome to my about page
// /contact --> Welcome to my contact page
// /temp --> welcome to my temp page

const express = require('express');
const app = express();
// es do uper ke line likh dene se hamara express application create ho  jata hai

const port = 3000;
app.get("/",(req,res) => {
    res.send("Welcome to my home page");
});

app.get("/about",(req,res) => {
    res.send("Welcome to my about page");
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
})