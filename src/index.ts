#!/usr/bin/env ts-node

import { program } from 'commander';
import chalk from 'chalk';
import clear from 'clear';
import axios from 'axios';

interface TodoParams {
  id: string;
}

program
  .name('econverse')
  .description('Econverse CLI')
  .usage('econverse <command> [options]')
  .version('0.0.1');

async function getTodos({ id }: TodoParams) {
  const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const { data } = await axios.get(URL);

  console.log(data);
}

// yarn ts-node src/index.ts todos --id 2
program
  .command('todos')
  .description("retrieve a specific todo based on it's id")
  .option('--id <id>', "Todo's id to be displayed", '1')
  .action(getTodos);

program.parse(process.argv);

// clear();
// console.log(chalk.yellowBright('Econverse'));
