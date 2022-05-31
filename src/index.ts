#!/usr/bin/env ts-node

import { program } from 'commander';

import { createFileCommand } from './commands/create';
import { createTodosCommand } from './commands/todos';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('econverse <command> [options]')
  .version('0.0.1');

createFileCommand();
createTodosCommand();

program.parse(process.argv);
