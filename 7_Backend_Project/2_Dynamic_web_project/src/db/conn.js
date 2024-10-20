const mongoose = require("mongoose");
const Detail = require('../models/Details')
const Slider = require('../models/slider')
const Service = require('../models/service')


const connectToMongo=()=>{
   mongoose.connect("mongodb://0.0.0.0:27017/Dynamic_app",{
       useNewUrlParser:true,
       useUnifiedTopology:true,
       //useCreateIndex:true
       

    }).then(() =>{
       console.log(`connection successful`);
    }).catch((e) => {
       console.log(e);
    })


    /*
    Service.create([
        {
            icon:'fa-sharp fa-regular fa-globe fa-flip',
            title:"Provide Best Courses",
            description:'We provide courses that helps our student in learning and in placement',
            linkText:'https:www.learncodewithdurgesh.com',
            link:'check'
        },
        {
            icon:'fa-solid fa-grill-hot fa-shake',
            title:'Learn Projects',
            description:'We provide courses that helps our student in learning and in placement',
            linkText:'https:www.learncodewithdurgesh.com',
            link:'learn'
        },
        {
            icon:'fa-solid fa-grill-hot fa-shake',
            title:'Learn Projects',
            description:'We provide courses that helps our student in learning and in placement',
            linkText:'https:www.learncodewithdurgesh.com',
            link:'learn'
        }
       
        


    ])
    */


    /*
    Slider.create([
        {
            title:'Learn Java in very easy manner',
            subTitle:'Java is one of the most popular programming language.',
            imageUrl:'image/pic_1.jpg'
        },
        {
            title:'what is Django in python?',
            subTitle:'Django is most famous web framework of python programming.',
            imageUrl:'image/pic_code_img_2.jpg'
        },
        {
            title:'what about node js ?',
            subTitle:'Node js is runtime environment to execute javascript outside browser.',
            imageUrl:'image/pic_edge_2.jpg'
        }
    ])
    */


    /*
  Detail.create({
    brandName:"Info Technical Solution",
    brandIconUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fraw.githubusercontent.com%2Fsnwh%2Fpaper-icon-theme%2Fmaster%2FPaper%2F512x512%2Fapps%2Fpreferences-color.png&tbnid=uAsxh6AmIkMK6M&vet=12ahUKEwip5NvNzqv-AhURB7cAHT0zCkIQMyhBegUIARCCAQ..i&imgrefurl=https%3A%2F%2Fsnwh.org%2Fpaper&docid=EHU2h7Qbh38UlM&w=512&h=512&q=icon%20images&ved=2ahUKEwip5NvNzqv-AhURB7cAHT0zCkIQMyhBegUIARCCAQ",
    links:[
        {
            label:"Home",
            url:"/"
        },
        {
            label:"Services",
            url:"/Services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact Us",
            url:"/contact-us"
        }
    ]
    
})

*/

}
module.exports=connectToMongo;