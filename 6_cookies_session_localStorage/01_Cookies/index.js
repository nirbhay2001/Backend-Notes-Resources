// npm install --save cookie-parser --> esase cookie-parser nam ka package ko install kar dega, package.json me cookie-parser nam ka ak dependencies add ho jayega


var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){

console.log('Cookies:',req.cookies);
// res.cookie('name','Programming Experience').send('cookie set'); // es tarah se data ko client side machine per save kar sakte hai, esko jab get karte hai to ye object ke form me milta hai

// set cookie
res.cookie('name','Programming Experience',{expire:10000+Date.now()});
res.send('Cookie set');
})

// Delete Cookie
app.get('/clear',function(req,res){
    res.clearCookie('name');
    res.send('Cookie are clear');
})

app.listen(3000);