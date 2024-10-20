const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Register = require("./models/register");

const port = process.env.PORT || 8000;


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json()); // eska use esliye karte hai ki jab koi data client ke doura server side bheja jaye to ye data request body ke ander json format me rahe; http request body ke ander various type ke format me data ko store kiya ja sakta hai, e.g json,XML,form data
//an HTTP POST request, the request body contains the data that is being sent to the server
app.use(express.urlencoded({extended:false})); // eska use esliye kiya jata hai ki jo request body ke ander urlencoded data hai usko parse kiya ja sake using querystring library ya qs library, jab eska use nahi karnge to jab request body se data ko fetch karenge to undefined dikhayega


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res) => {
    res.render("index");
})

app.get("/register", (req,res) => {
    res.render("register");
})

app.get("/login", (req,res) => {
    res.render("login");
})

// create a new user in our database
app.post("/register", async(req,res) => {
    try{
        // console.log(req.body.firstname);
        // res.send(req.body.firstname);
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        // const cpassword = req.body.confirmpassword; confirmpassword ye schema se deto match karna chahiye

       if(password === cpassword){
            const registerEmployee = new Register({
                // firstname (firstname: Schema Wala) : req.body.firstname(firstname: Attribute name of input field)

                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })

            const registered = await registerEmployee.save(); // esase data ko database me save kiya jata hai, jab esko nahi likhenge to data database me nahi dikhega
            res.status(201).render("index");

       }else{
        res.send("password are not matching");
       }


    }catch(error){
        res.status(400).send(error);
    }
})

// login check
app.post("/login", async(req,res) => {
    try{
        const email = req.body.email;
        // const email = req.body.email; req.body.email eske doura email input field me jo user likhega wah store ho jayega, req.body.email(email ye wala input field ka name attribute hai)

        const password = req.body.password;
        // console.log(`${email} and password is ${password}`);

        const useremail = await Register.findOne({email:email}); // email(ye email database ke schema wala hai) : email(ye wala email jo user ne input kiya hai i.e email = req.body.email)
        // useremail ak object hai document ka jiska database me save email aur user doura diya gya email jab match karta hai

        if(useremail.password === password){
            res.status(201).render("index");
        }else{
            res.send("invalid login Details");
        }


    }catch(error){
        res.status(400).send("invalid login Details")
    }
})


app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
})






/*

    The code app.use(express.urlencoded({ extended: false })) is configuring middleware in an Express.js application to parse URL-encoded data in incoming HTTP requests. Let's break down what each part of this code does:

    1. app.use(): This is an Express.js method that is used to add middleware functions to the application's request processing pipeline. Middleware functions are executed for every incoming request, and they can modify the request or response objects, perform additional processing, or execute specific tasks before passing control to the next middleware or route handler.

    2. express.urlencoded({ extended: false }): This part of the code is configuring the URL-encoded data parsing middleware provided by Express.js.

        express.urlencoded(): This is a middleware function provided by Express.js specifically for parsing URL-encoded data in the request body. URL-encoded data is commonly sent from HTML forms.

        { extended: false }: This is an option passed to the express.urlencoded() middleware. The extended option determines whether the URL-encoded data should be parsed using the querystring library (when false) or the qs library (when true). The querystring library is a built-in Node.js module that provides basic URL query string parsing, while the qs library is a third-party library that provides more advanced parsing capabilities.

    By setting extended to false, you're using the querystring library for parsing the URL-encoded data. This library does not support nested objects or arrays in the URL-encoded data. If your data includes nested objects or arrays, you would typically set extended to true and use the qs library.

So, the overall effect of app.use(express.urlencoded({ extended: false })) is that it adds middleware to your Express.js application to parse URL-encoded data from incoming requests using the basic querystring library. This allows you to access the parsed data as req.body in your route handlers, making it easier to work with form data submitted to your application.



*/

/*

    1. app.use(): यह एक Express.js मेथड है जिसका उपयोग मिडलवेयर फ़ंक्शन को एप्लिकेशन की अनुरोध प्रसंस्करण पाइपलाइन में जोड़ने के लिए किया जाता है। मिडलवेयर फ़ंक्शन प्रत्येक आयन करने वाले अनुरोध के लिए निष्पादित होते हैं और वे अनुरोध या प्रतिक्रिया ऑब्जेक्ट को संशोधित कर सकते हैं, अतिरिक्त प्रसंस्करण कर सकते हैं, या आगामी मिडलवेयर या रूट हैंडलर को नियंत्रण देने से पहले विशिष्ट कार्यों को निष्पादित कर सकते हैं।

    2. express.urlencoded(): यह Express.js द्वारा प्रदान की जाने वाली मिडलवेयर      फ़ंक्शन है जो रिक्वेस्ट बॉडी में URL-एन्कोडेड डेटा को पार्स करने के लिए उपयोग   होती है। URL-एन्कोडेड डेटा आमतौर पर एचटीटीपी फ़ॉर्म्स से भेजा जाता है।


    3. { extended: false }: यह express.urlencoded() मिडलवेयर को पास किए जाने वाले   विकल्प हैं। extended विकल्प तय करता है कि URL-एन्कोडेड डेटा को querystring लाइब्रेरी का उपयोग करके पार्स किया जाए (जब false होता है) या qs लाइब्रेरी का उपयोग करके पार्स किया जाए (जब true होता है)। querystring लाइब्रेरी एक अंतर्निहित Node.js मॉड्यूल है जो बेसिक URL क्वेरी स्ट्रिंग पार्सिंग प्रदान करता है, जबकि qs लाइब्रेरी एक थर्ड-पार्टी लाइब्रेरी है जो अधिक उन्नत पार्सिंग क्षमताएँ प्रदान करती है।


    4. app.use(express.urlencoded({ extended: false })) का कुल प्रभाव यह है कि यह आपके Express.js एप्लिकेशन में मिडलवेयर जोड़ता है ताकि यह URL-एन्कोडेड डेटा को आयन करने वाले अनुरोधों से पार्स कर सके, बेसिक querystring लाइब्रेरी का उपयोग करके। इससे आपको अपने एप्लिकेशन को सबमिट


*/