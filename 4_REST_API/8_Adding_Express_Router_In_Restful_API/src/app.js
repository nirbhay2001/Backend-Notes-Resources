const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");
const app = express();

const port = process.env.PORT || 8000;


/*

 1. You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests. We only need it for post and put req

 2. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

*/

app.use(express.json); // jo incomeing request aa raha hai , us request ko as json format me accept ho jaye uske liye ye code hai


/*

 // Step for new router
 // 1.  Create a new router
 const router = new express.Router();
 // 2. we need to define the router
 router.get("/thapa",(req,res) => {
    res.send("Hello whatUp guys");
 });
 // 3. we need to register our router
 app.use(router);

*/

app.use(studentRouter);




app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


