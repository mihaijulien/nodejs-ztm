var fs = require('fs');
var http =  require('http');
var file = 'powder-day.mp4';
var path = require('path');

http.createServer((req, res) => {

    fs.readFile(__dirname  + path.sep + file, (error, data) => {
        if (error) {
            console.log('hmmmm: ', error);
        }
        res.writeHeader(200, { 'Content-Type': 'video/mp4' });
        res.end(data);
    })

}).listen(3000, () => console.log('buffer - http://localhost:3000'));
