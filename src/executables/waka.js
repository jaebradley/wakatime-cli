#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('CLI that combines searching and installing npm packages')
  .command('setup', 'Add API Key')
  .command('today', 'Get Daily Summary')
  .parse(process.argv);
