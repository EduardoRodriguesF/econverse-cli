import { program } from 'commander';
import init from './init';

function initCommand() {
  program
    .command('init')
    .argument('[accountName]', "VTEX store's account name")
    .description('Initialize a new project')
    .action(init);
}

export default initCommand;
