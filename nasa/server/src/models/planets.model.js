const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function loadPlanetsData(){
    // open the csv file as a readable stream because the parse function
    // deals with streams of data
    return new Promise((resolve, reject) => { fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        // feed the read stream to the writable stream of the parse function to process the data 
        .pipe(parse({
            comment: '#', // specifying that the file containing lines with # will be considered as comments
            columns: true, // to create json format rather than having it in the form of array
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data))
                habitablePlanets.push(data)
        })
        .on('error', (err) => {
            console.log(err);
            reject(err);
        })
        .on('end', () => {
            console.log(`${habitablePlanets.length} habitable planets found!`);
            resolve();
        });
    });
}

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets,
};
