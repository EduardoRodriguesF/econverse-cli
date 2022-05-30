#!/usr/bin/env ts-node

import { program } from 'commander';

program.description('Econverse CLI');
program.name('econverse');
program.usage('<command> [options]');

console.log('Econverse CLI');

program
  .command('init')
  .argument('[accountName]', "VTEX store's account name")
  .description('Initialize a new project');

program.parse();
