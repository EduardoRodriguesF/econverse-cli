import { program } from 'commander';

interface Params {
  file_name: string;
  file_location: string;
}

// yarn ts-node src/index.ts create -n jorge -l ./commands
export function createFileCommand() {
  async function createFile(params: Params) {
    console.log(params);
  }

  program
    .command('create')
    .description('create a file with the given name and path')
    .option('-n, --file-name <file_name>', 'define the file name to be created')
    .option(
      '-l, --file-location <file_location>',
      'define where the file will be created',
      '.',
    )
    .action(createFile);
}
