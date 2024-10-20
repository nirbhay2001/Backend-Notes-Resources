const express = new require("express");
const router = new express.Router();
const Student = require("../models/students");

// we need to define the router

router.get("/thapa",(req,res) => {
    res.send("Hello whatUp guys");
});


// create a new students
router.post("/students",async(req,res) => {
    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})




// read the data of registered Students
router.get("/students", async(req,res) => {
    try{
        const studentsData = Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

// get the indivisual Student data using id
router.get("/students/:id",async(req,res) => {
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


// Update the students by it id
router.patch("/students/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
           new : true
        });
        res.send(updateStudents);
        

    }catch(e){
        res.status(404).send(e);
    }
})

// Delete the students by it id 
router.delete("/students/:id", async(req,res) => {
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








module.exports = router; 