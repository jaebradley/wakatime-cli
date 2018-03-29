#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('CLI that combines searching and installing npm packages')
  // all options defined in https://docs.npmjs.com/cli/install
  .command('setup', 'Add API token')
  .parse(process.argv);
