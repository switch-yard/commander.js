#!/usr/bin/env node

// Commander suggests the closest command or option after a typo.
//
// Try:
//    node suggestions.js statsu
//    node suggestions.js status --verbos

import { Command } from 'commander';
const program = new Command();

program.name('deploy').showSuggestionAfterError();

program
  .command('status')
  .description('show the deployment status')
  .option('--verbose', 'show every step')
  .action((options) => {
    console.log(options.verbose ? 'all steps healthy' : 'healthy');
  });

program
  .command('start')
  .description('start a deployment')
  .action(() => {
    console.log('starting');
  });

program.parse();
