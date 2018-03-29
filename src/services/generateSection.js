import chalk from 'chalk';

import generateTable from './generateTable';

const generateSection = ({ name, data }) => {
  console.log(chalk.cyan.bold(name));
  generateTable(data);
};

export default generateSection;
