#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');

try{
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    
    if (args['--start']) {
        console.log('starting the app');
    }
} catch (e) {
    console.log(e.message);
    usage();
}

function usage() {
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
  }