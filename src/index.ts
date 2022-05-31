#!/usr/bin/env ts-node

import { program } from 'commander';
import init from './commands/init';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('<command> [options]');

program
  .command('init')
  .argument('[accountName]', "VTEX store's account name")
  .description('Initialize a new project')
  .action(init);

program.parse();
