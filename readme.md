# econverse cli

To see all the available commands & options, run:

```bash
yarn ts-node src/index.ts help
```

## Running locally

To run this cli locally you'll need to execute:

```bash
# yarn
yarn ts-node src/index.ts <cli-params>

# npm
npx ts-node src/index.ts <cli-params>
```

for example, if i want to run my last created `todos` method with an `--id 2`, i may run:

```bash
yarn ts-node src/index.ts todos --id 2

# { userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false }
```

## Folder design

I thought about doing each command on it's own file using `/commands/[command].ts`,
and exporting a function that renders it's command(s) with it's action.

You can see two examples going to `/commands/create.ts` or `/commands/todos.ts`.
