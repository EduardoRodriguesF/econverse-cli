#!/usr/bin/env ts-node

import { program } from 'commander';
import initCommand from './commands/init';

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('<command> [options]');

initCommand();

program.parse(process.argv);
