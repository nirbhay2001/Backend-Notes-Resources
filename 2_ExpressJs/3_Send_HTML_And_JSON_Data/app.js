const express = require('express');
const app = express();
// es do uper ke line likh dene se hamara express application create ho  jata hai

const port = 3000;
app.get("/",(req,res) => {
    res.write("<h1>Welcome to my home page</h1>");
    res.write("<h1>Welcome to my again home page</h1>");
    res.send(); // esko likhana bahut jaruri hai kyuki web page per lagega ki abhi aur data aa raha hai ; Nodejs ke case me res.end() likhte hai; esase connection ko close kar deta hai
});

app.get("/about",(req,res) => {
    res.send({
        id:1,
        name:"vinod",
    }); // es prakar se ye data json format me web page per dikhega
});

app.get("/contact", (req,res) => {
    res.send([
        {
            id: 1,
            name: "vinod",
        },
        {
            id: 2,
            name: "aryan",
        }
    ])  // es prakar se multiple object ko send kar sakte hai
});

app.get("/temp", (req,res) => {
    res.json([
        {
            id: 1,
            name: "vinod",
        },
        {
            id: 2,
            name: "aryan",
        }
    ])  // The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
})