const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const app = express();

const port = process.env.PORT || 8000;

// We will handle post req
app.post("/mens", async(req,res) => {
    try{
        const addingMensRecords = new MensRanking({
            "ranking":1,
            "name" : "Christian COLEMAN",
            "dob" : "06 MAR 1996",
            "country" : "USA",
            "score" : "1477"
        })
        addingMensRecords.save();
    }catch(e){
        res.send(e);
    }
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})