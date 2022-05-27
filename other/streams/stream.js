var fs = require('fs');
var http =  require('http');
var file = 'powder-day.mp4';
var path = require('path');

http.createServer((req, res) => {

    res.writeHeader(200, { 'Content-Type': 'video/mp4' });
    fs.createReadStream(__dirname  + path.sep + file)
        .pipe(res)
        .on('error', console.error);

}).listen(3000, () => console.log('stream - http://localhost:3000'));
