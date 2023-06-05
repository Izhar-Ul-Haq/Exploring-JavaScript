
const fs = require("fs");
const http = require("http");

const server = http.createServer();


// server.on('request', (req, res)=>{
//     var fs = require("fs");
//     fs.readFile("izhar.txt", (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });

server.on('request', (req, res)=>{
    const rstream = fs.creatReadStream("izhar.txt");
    rstream.on('data', (chunkdata)=>{
        res.write(chunkdata);
    });

    rstream.on("end", ()=>{
        res.end();
    });

});

server.listen(8000, "127.0.0.1");