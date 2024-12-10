import cac from 'cac';

const cli = cac('console');

cli.command('hello', 'Prints hello world').action(() => {
  console.log('Hello World');
});
cli.help();
cli.parse();
