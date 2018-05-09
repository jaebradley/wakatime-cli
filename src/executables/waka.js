#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('CLI that displays data from the WakaTime service')
  .command('setup', 'Add API Key')
  .command('today', 'Get Daily Summary')
  .command('yesterday', 'Get Summary for Yesterday')
  .command('week', 'Get Summary for Week')
  .parse(process.argv);
