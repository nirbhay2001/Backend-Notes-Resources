const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");
const app = express();

const port = process.env.PORT || 8000;
// setting the path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

// middleware
app.use('./css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('./js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('./jq', express.static(path.join(__dirname, "../node_modules/jquary/dist")));
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);


// routing
// app.get(path, callback)
app.get("/",(req,res) => {
    res.render("index");
})

app.get("/contact",(req,res) => {
    res.render("contact");
})



app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


