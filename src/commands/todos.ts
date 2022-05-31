import { program } from 'commander';
import axios from 'axios';

interface TodoParams {
  id: string;
}

export function createTodosCommand() {
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
}
