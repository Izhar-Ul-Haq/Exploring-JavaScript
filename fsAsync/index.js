const fs = require("fs");

// fs.writeFile("bio.txt", "Hi! My name is Izhar Ul Haq and I am a computer science engineering student",
// (err) => {
//     console.log("File is created");
//     console.log(err);
// }
// );

// fs.appendFile("bio.txt", "We are gonna read the bio file now",
//     (err)=>{
//         console.log("Appended the Sentences");
//         console.log(err);
//     }
// );
fs.readFile("bio.txt","utf-8", (err, data)=> {
    console.log(data);
    console.log(err);
});

