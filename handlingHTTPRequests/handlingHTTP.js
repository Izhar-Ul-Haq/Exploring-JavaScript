const http = require("http");
const { type } = require("os");
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("Hello From Home");
    }
    else if(req.url == "/about"){
        res.end("Hello From The About Section");
    } 
    else if(req.url == "/contact"){
        res.end("Hello From The Contact Section");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 Error Page: Sorry This Page does not exist</h1>");
    }
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening to the PORT 8000 . . .");
});