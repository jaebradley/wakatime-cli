/* eslint-disable no-console */

import chalk from 'chalk';

import generateSection from './generateSection';
import shouldGenerateSection from './shouldGenerateSection';

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

  if (shouldGenerateSection({ data: editors, showAllSections, showSpecificSection: showEditors })) {
    generateSection({ name: '✍️  Editors', data: editors });
  }

  if (shouldGenerateSection({
    data: languages,
    showAllSections,
    showSpecificSection: showLanguages,
  })) {
    generateSection({ name: '🗣️  Languages', data: languages });
  }

  if (shouldGenerateSection({
    data: projects,
    showAllSections,
    showSpecificSection: showProjects,
  })) {
    generateSection({ name: '🚀  Projects', data: projects });
  }
};

export default generateDailySummary;
