const fs = require("fs")

fs.writeFileSync("bio.txt", "Hello World! I am Life!!!")

data = fs.readFileSync("bio.txt", "utf-8")
console.log(data)

fs.renameSync('bio.txt', 'mybio.txt')
