const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("SayMyName", ()=>{
//     console.log("My name is Izhar!!!");
// });
// event.on("SayMyName", ()=>{
//     console.log("My name is Ul!!!");
// });
// event.on("SayMyName", ()=>{
//     console.log("My name is Haq!!!");
// });

// event.emit("SayMyName");
event.on("checkpage", (sc, msg)=>{
    console.log(`Status Code is ${sc} and the Page is ${msg}`);
})

event.emit("checkpage", 200, "ok")

