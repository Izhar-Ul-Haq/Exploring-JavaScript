const fs = require("fs")

// data = fs.readFileSync("bio.txt", "utf-8");
// console.log(data)

// console.log("After the data");


const data = fs.readFile("bio.txt", "utf-8", 
    (err, data)=>{
        console.log(data);
        console.log(err);
    }

);
console.log("after the data");