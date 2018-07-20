#!/usr/bin/env node

import program from 'commander';
import {
  DateTime,
} from 'luxon';

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
  .option('-E, --showEditors', 'Show editors section')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-L, --showLanguages', 'Show languages section')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-P, --showProjects', 'Show projects section')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      await getDailySummary({
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
        showEditors: args.showEditors,
        showLanguages: args.showLanguages,
        showProjects: args.showProjects,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program
  .command('yesterday')
  .description('Get Summary for Yesterday')
  .option('-E, --showEditors', 'Show editors section')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-L, --showLanguages', 'Show languages section')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-P, --showProjects', 'Show projects section')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      // GROSS
      const yesterday = DateTime.local().minus({ days: 1 });
      await getDailySummary({
        date: yesterday,
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
        showEditors: args.showEditors,
        showLanguages: args.showLanguages,
        showProjects: args.showProjects,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program
  .command('week')
  .description('Get Summary for Week')
  .option('-E, --showEditors', 'Show editors section')
  .option('-e, --editorsFilter <editorFilter>', 'Filter editors by their name using regex')
  .option('-L, --showLanguages', 'Show languages section')
  .option('-l, --languagesFilter <languagesFilter>', 'Filters languages by their name using regex')
  .option('-P, --showProjects', 'Show projects section')
  .option('-p, --projectsFilter <projectsFilter', 'Filters projects by their name using regex')
  .action(async (args) => {
    try {
      await getWeeklySummary({
        editorsFilter: args.editorsFilter,
        languagesFilter: args.languagesFilter,
        projectsFilter: args.projectsFilter,
        showEditors: args.showEditors,
        showLanguages: args.showLanguages,
        showProjects: args.showProjects,
      });
    } catch (error) {
      console.error('😞  Rut ro, an error occurred');
      console.error(error);
    }
  });

program.parse(process.argv);
