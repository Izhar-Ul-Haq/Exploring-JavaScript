const fs = require("fs")

// fs.mkdir("ThapaTechnical", 
//     (err)=>{
//         console.log("Files Created!!!");
//         console.log(err)
//     }
// );

// fs.writeFile("ThapaTechnical/bio.txt", "Hi! We have created Thapa Technical and we are now adding bio.txt file in it",
//     (err)=>{
//         console.log("Text File Created in ThapaTechnical Directory!!!");
//         console.log(err);

//     }
// );
// fs.appendFile("ThapaTechnical/bio.txt", " One day Izhar Ul Haq will Fly Away!!!",
//     (err)=>{
//         console.log("Data Appended!!!");
//         console.log(err);
//     }
// );


// fs.readFile("ThapaTechnical/bio.txt", "utf-8",(err, data)=>{
//     console.log(data);
//     console.log(err);
// }
// );

fs.rename("ThapaTechnical/bio.txt", "ThapaTechnical/mybio.txt",
    (err)=>{
        console.log("File Renamed!!!");
        console.log(err);
    }
);