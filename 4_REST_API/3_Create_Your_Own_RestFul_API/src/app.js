const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();

const port = process.env.PORT || 8000;


/*

 1. You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests. We only need it for post and put req

 2. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

*/

app.use(express.json); // jo incomeing request aa raha hai , us request ko as json format me accept ho jaye uske liye ye code hai

// create a new students
app.post("/students",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
   
})


app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


