const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("Hello From the Other Side!!! and Welcome Izhar Ul Haq");
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the PORT 8000 . . .");
});


