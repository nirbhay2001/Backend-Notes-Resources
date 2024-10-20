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
app.post("/students",async(req,res) => {
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})




// read the data of registered Students
app.get("/students", async(req,res) => {
    try{
        const studentsData = Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// get the indivisual Student data using id
app.get("/students/:id",async(req,res) => {
    try{
        const _id = req.params.id; // es tarah se url se aaye data ko ak variable me store karte hai;, easme es url se ak id mil raha hai
        
        // console.log(req.params.id);
        const studentData = await Student.findById(_id);
        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
        

    }catch(e){
        res.send(e);
    }
})

// Delete the students by it id 
app.delete("/students/:id", async(req,res) => {
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`Connection is setup at ${port}`);
})


