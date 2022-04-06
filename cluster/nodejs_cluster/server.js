const http = require("http");
const os = require("os");
const cluster = require("cluster");

const cpuCores = os.cpus().length;

if (cluster.isMaster) {
    let instance = 0;
    while (instance < cpuCores) {
        cluster.fork();
        ++instance;
    }
} else {
    console.log(`Child-process ${process.pid} started`);
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Server endpoint hit");
    }).listen(8080);
}