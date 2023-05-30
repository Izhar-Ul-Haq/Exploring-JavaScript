const name = "Izhar Ul Haq";
console.log(name)

const fs = require("fs");
// fs.writeFileSync('read.txt', "Welcome to My Channel")
// fs.writeFileSync('read.txt', "Welcome!!! Welcome to My Channel")
// fs.appendFileSync("read.txt", " Izhar Ul Haq The Traveller")

const buf_data = fs.readFileSync('read.txt')
console.log(buf_data)

const bufToStr = buf_data.toString()
console.log(bufToStr)

fs.renameSync("read.txt", "readWrite.txt")
