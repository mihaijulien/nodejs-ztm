const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

// open the csv file as a readable stream because the parse function
// deals with streams of data
fs.createReadStream('kepler_data.csv')
    // feed the read stream to the writable stream of the parse function to process the data 
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        results.push(data)
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results);
        console.log('done');
    });
    