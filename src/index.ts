#!/usr/bin/env ts-node

import { program } from 'commander';
import createCommand from './commands/create';
import initCommand from './commands/init';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('<command> [options]');

initCommand();
createCommand();

program.parse(process.argv);
