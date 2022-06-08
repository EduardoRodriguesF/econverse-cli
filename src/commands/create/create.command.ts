import { program } from 'commander';
import create from './create';

function createCommand() {
  program
    .command('create')
    .description('Create a React component')
    .argument('<name>', 'Define the component name to be created')
    .option(
      '-p, --path <path>',
      'Define the folder path to find the nearest components folder',
      '.',
    )
    .option(
      '-e, --explicit-path <path>',
      'Define the folder path to create the component',
    )
    .action(create);
}

export default createCommand;
