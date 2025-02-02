const express = require('express')
const {route} = require('express/lib/application')
const Detail = require("../models/Details")
const Slider = require("../models/slider")
const Service = require('../models/service')
const Contact = require('../models/contact')


const routes = express.Router()
routes.get("/", async(req,res)=>{
    const details = await Detail.findOne({"_id":"643a964b0634f92f4af2d52a"})
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(details)
    // console.log(slides)
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})


routes.get('/gallery', async(req,res)=>{
    const details = await Detail.findOne({"_id":"643a964b0634f92f4af2d52a"})
    res.render('gallery',{
        details:details
        
    })
})

// process contact form
routes.post("/process-contact-form", async(request,response)=>{
    // console.log(request.body)
    // save the data to db
    try{
        const data =await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})

module.exports = routes