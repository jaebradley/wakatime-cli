import chalk from 'chalk';

import generateSection from './generateSection';

const generateDailySummary = ({
  grandTotal,
  editors,
  languages,
  projects,
}) => {
  console.log(chalk.cyan.bold('⏳  Total'));
  console.log(`${chalk.magenta.bold(grandTotal.text)}\n`);

  generateSection({ name: '✍️  Editors', data: editors });
  generateSection({ name: '🗣️  Languages', data: languages });
  generateSection({ name: '🚀  Projects', data: projects });
};

export default generateDailySummary;
