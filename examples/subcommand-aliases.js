#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('deploy')
  .description('An example of subcommands that answer to more than one name');

program
  .command('status')
  .alias('st')
  .description('show what is deployed')
  .action(() => {
    console.log('everything is deployed');
  });

program
  .command('rollback')
  .aliases(['rb', 'undo'])
  .argument('[version]', 'the version to return to', 'previous')
  .description('return to an earlier version')
  .action((version) => {
    console.log(`rolling back to ${version}`);
  });

program.parse();

// Try the following:
//    node subcommand-aliases.js st
//    node subcommand-aliases.js undo v1.2.0
//    node subcommand-aliases.js help rollback
