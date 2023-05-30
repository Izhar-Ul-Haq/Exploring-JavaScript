const path = require("path")

console.log(path.dirname("D:/Izhar Khan Khattak/NodeJS Telusko/Exploring-JavaScript/PathModule/pathModule.js"));
console.log(path.extname("D:/Izhar Khan Khattak/NodeJS Telusko/Exploring-JavaScript/PathModule/pathModule.js"));
console.log(path.basename("D:/Izhar Khan Khattak/NodeJS Telusko/Exploring-JavaScript/PathModule/pathModule.js"));
console.log(path.parse("D:/Izhar Khan Khattak/NodeJS Telusko/Exploring-JavaScript/PathModule/pathModule.js"));

myPath = path.parse("D:/Izhar Khan Khattak/NodeJS Telusko/Exploring-JavaScript/PathModule/pathModule.js")
console.log(myPath.name);
console.log(myPath.root);
console.log(myPath.log);

