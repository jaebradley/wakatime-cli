#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';
import {
  getDailySummary,
  getWeeklySummary,
} from '..';

program
  .version(pkg.version)
  .description('CLI that displays data from the WakaTime service');

program
  .command('setup')
  .description('Add API Key');

program
  .command('today')
  .description('Get Daily Summary')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      await getDailySummary({
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program
  .command('yesterday')
  .description('Get Summary for Yesterday')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      // GROSS
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      await getDailySummary({
        date: yesterday,
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program
  .command('week')
  .description('Get Summary for Week')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      await getWeeklySummary({
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program.parse(process.argv);
