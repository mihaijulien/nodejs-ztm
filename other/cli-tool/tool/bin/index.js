#!/usr/bin/env node
const arg = require('arg');

const args = arg({
    '--start': Boolean,
    '--build': Boolean,
});


if (args['--start']) {
    console.log('starting the app');
}