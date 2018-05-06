import chalk from 'chalk';
import generateSection from './generateSection';

const generateWeeklySummary = (data) => {
  const grandTotals = data.data.data.map((day) => {
    const {
      range,
      grand_total: grandTotal,
    } = day;
    const {
      text,
      total_seconds: totalSeconds,
    } = grandTotal;
    const {
      date,
    } = range;
    return {
      text,
      totalSeconds,
      name: date,
      percent: totalSeconds,
    };
  });
  const weeklyGrandTotal = grandTotals
    .reduce((total, grandTotal) => total + grandTotal.totalSeconds, 0);
  const formattedWeeklyGrandTotal = new Date(weeklyGrandTotal * 1000).toISOString().substr(11, 8);

  console.log(chalk.cyan.bold(`⏳  Total For Past 7 Days: ${chalk.magenta.bold(formattedWeeklyGrandTotal)}\n`));
  generateSection({ name: 'By Day', data: grandTotals });
};

export default generateWeeklySummary;
