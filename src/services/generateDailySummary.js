/* eslint-disable no-console */

import chalk from 'chalk';

import generateSection from './generateSection';

const generateDailySummary = ({
  grandTotal,
  range,
  editors,
  languages,
  projects,
  showEditors = null,
  showLanguages = null,
  showProjects = null,
}) => {
  const showAllSections = showEditors == null && showLanguages == null && showProjects == null;

  console.log(chalk.cyan.bold(`⏳  Total for ${range.date}`));
  console.log(`${chalk.magenta.bold(grandTotal.text)}\n`);

  if (showAllSections || (!showAllSections && showEditors)) {
    generateSection({ name: '✍️  Editors', data: editors });
  }

  if (showAllSections || (!showAllSections && showLanguages)) {
    generateSection({ name: '🗣️  Languages', data: languages });
  }

  if (showAllSections || (!showAllSections && showProjects)) {
    generateSection({ name: '🚀  Projects', data: projects });
  }
};

export default generateDailySummary;
