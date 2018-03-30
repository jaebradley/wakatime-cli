import chalk from 'chalk';

import generateSection from './generateSection';

const generateDailySummary = ({
  grandTotal,
  range,
  editors,
  languages,
  projects,
}) => {
  console.log(chalk.cyan.bold(`⏳  Total for ${range.date}`));
  console.log(`${chalk.magenta.bold(grandTotal.text)}\n`);

  generateSection({ name: '✍️  Editors', data: editors });
  generateSection({ name: '🗣️  Languages', data: languages });
  generateSection({ name: '🚀  Projects', data: projects });
};

export default generateDailySummary;
