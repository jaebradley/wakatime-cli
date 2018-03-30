import barHorizontal from 'bar-horizontal';
import chalk from 'chalk';

const generateTable = (data) => {
  const inputs = data.reduce((obj, { name, text, percent }) => {
    const key = chalk.magentaBright.bold(`${name} (${text})`);
    obj[key] = percent; // eslint-disable-line no-param-reassign
    return obj;
  }, {});
  barHorizontal(inputs, { labels: true });
};

export default generateTable;
