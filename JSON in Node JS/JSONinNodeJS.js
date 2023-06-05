const fs = require("fs");
const { json } = require("express");

const bioData = {
    name : "Izhar Ul Haq",
    age : 27,
    channel : "Thapa Technical",
};
console.log(bioData);
console.log(bioData.channel);
console.log(bioData.name);
// To JSON data

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(jsonData["name"]);

// To Object Data

const objData = JSON.parse(jsonData);

console.log(objData);

console.log(objData.name);
console.log(objData.age);
console.log(objData.channel);

fs.writeFile("copyJSON.json", jsonData, (err)=>{
    console.log("Done");
});

fs.readFile("copyJSON.json","utf-8", (err, data)=>{
    console.log(data);
});