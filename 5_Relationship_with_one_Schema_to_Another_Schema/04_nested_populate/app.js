const app = require('express')();
var http = require('http').Server(app);

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testPost");

const User = require('./models/userModel');
const Post = require('./models/postModel');
const Comment = require('./models/commentModel');


app.get('/get-user-with-posts',async function(req,res){
    const data = await User.findOne({name:'Sandeep'}).populate({
        path:'posts',
        populate:{
            path: 'comments',
            model: 'Comments',
            populate:{
                path: 'author',
                model:'User'
            }
        }
    });
    res.send(data);
})

http.listen(3000,function(){
    console.log('Server is running');
});