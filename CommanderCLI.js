//creating a command line interface that lets user specify a file path and the node js process counts the number of words in it.

const fs = require('fs');
const { Command } = require("commander");
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length; // data.split(" ") created an array from string and using .length over there im accessing length of the array which is eventuyally the number of words in a string ! COOLLLL 
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();
