const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Server endpoint hit");
    console.log(`Endpoint hit, handled by ${process.pid}`);
}).listen(8080);