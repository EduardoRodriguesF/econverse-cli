#!/usr/bin/env node

import { program } from 'commander';
import clear from 'clear';
import chalk from 'chalk';
import figlet from 'figlet';

program.description('Econverse CLI');
program.name('econverse');
program.usage('econverse <command> [options]');

clear();
console.log(
  chalk.green(figlet.textSync('Econverse CLI', { horizontalLayout: 'full' })),
);
