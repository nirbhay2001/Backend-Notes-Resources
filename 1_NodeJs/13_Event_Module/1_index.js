/*

 Events Module
    --> Node.js has a built-in module, called "Events", where ypu can create-, fire-, and listen for- your own events.
    e.g 1--> Registering for the event to be fired only one time using once.
    e.g 2--> Create an event emitter instance and register a couple of callbacks
    e.g 3--> Registering for the event width callback parameters

*/
// e.g 1
const EventEmitter = require("events");
const event1 = new EventEmitter();
event1.on("sayMyName",() => {
    console.log("Your name is vinod");
});


event1.emit("sayMyName");


// e.g 2
const EventEmitter = require("events");
const event2 = new EventEmitter();
event2.on("sayMyName",() => {
    console.log("Your name is vinod");
});

event2.on("sayMyName",() => {
    console.log("Your name is bahadur");
});

event2.on("sayMyName",() => {
    console.log("Your name is thapa");
});


event2.emit("sayMyName"); // esame ak event se multiple callback kara sakte hai

// e.g 3
const EventEmitter = require("events");
const event3 = new EventEmitter();

event3.on('checkPage',(sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event3.emit("checkPage",200,"ok");



