#!/usr/bin/env ts-node

import { program } from 'commander';
import initCommand from './commands/init';
import { createFileCommand } from './commands/create';
import { createTodosCommand } from './commands/todos';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('<command> [options]');

initCommand();

createFileCommand();
createTodosCommand();

program.parse(process.argv);
