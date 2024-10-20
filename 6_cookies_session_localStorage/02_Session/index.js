// npm install express-session
var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({secret:"My Secret here"}));


/*
app.get('/',function(req,res){
    req.session.username = "Programming Experience";
    res.send("Session are set");

});

// Delete Cookie
app.get('/get-session',function(req,res){
    res.send("Your session user name is: " + req.session.username);
});
*/

app.get('/', function(req,res){
    if(req.session.user_visit){
        req.session.user_visit++;
        res.send("Your visited this Page" + req.session.user_visit+" times ");
    }else{
        req.session.user_visit = 1;
        res.send("Hii, you are visit this page first time!");
    }
});

app.listen(3000);