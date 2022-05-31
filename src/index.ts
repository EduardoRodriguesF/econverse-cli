#!/usr/bin/env ts-node

import { program } from 'commander';
import init from './commands/init';
import { createFileCommand } from './commands/create';
import { createTodosCommand } from './commands/todos';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('<command> [options]');

program
  .command('init')
  .argument('[accountName]', "VTEX store's account name")
  .description('Initialize a new project')
  .action(init);

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('econverse <command> [options]')
  .version('0.0.1');

createFileCommand();
createTodosCommand();

program.parse(process.argv);
