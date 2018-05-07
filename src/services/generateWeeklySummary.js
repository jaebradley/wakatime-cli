import chalk from 'chalk';
import generateSection from './generateSection';
import formatTime from './formatTime';
import aggregateDailyStatistics from './aggregateDailyStatistics';
import formatAggregatedStatistics from './formatAggregatedStatistics';

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
  const {
    editors,
    languages,
    projects,
  } = formatAggregatedStatistics(aggregateDailyStatistics(data.data.data));
  const weeklyGrandTotal = grandTotals
    .reduce((total, grandTotal) => total + grandTotal.totalSeconds, 0);
  const formattedWeeklyGrandTotal = formatTime(new Date(weeklyGrandTotal * 1000));

  console.log(chalk.cyan.bold(`⏳  Total For Past 7 Days: ${chalk.magenta.bold(formattedWeeklyGrandTotal)}\n`));
  generateSection({ name: '📅  By Day', data: grandTotals });
  generateSection({ name: '✍️  Editors', data: editors });
  generateSection({ name: '🗣️  Languages', data: languages });
  generateSection({ name: '🚀  Projects', data: projects });
};

export default generateWeeklySummary;
