#!/usr/bin/env node

import { Command } from 'commander';
// import clear from 'clear';
// import chalk from 'chalk';
// import figlet from 'figlet';

const program = new Command();

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('econverse <command> [options]')
  .version('0.0.1');

// TERMINAL: node -r ts-node/register src/index.ts help split
program
  .command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
// clear();
// console.log(
//   chalk.green(figlet.textSync('Econverse CLI', { horizontalLayout: 'full' })),
// );
