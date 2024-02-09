#!/usr/bin/env node
const arg = require('arg');
const chalk = require('chalk');
const pkgUp = require('pkg-up');

try{
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });
    
    
    if (args['--start']) {
        const pkgPath = pkgUp.sync({cwd: process.cwd()});
        const pkg = require(pkgPath);

        if (pkg.tool) {
            console.log('Found configuration', pkg.tool);
            // TODO: do something with configuration
        } else {
            console.log(chalk.yellow('Could not find configuration, using default'));
            // TODO: get default configuration
        }
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