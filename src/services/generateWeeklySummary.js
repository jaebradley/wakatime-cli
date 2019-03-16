/* eslint-disable no-console */

import chalk from 'chalk';
import generateSection from './generateSection';
import formatTime from './formatTime';
import aggregateDailyStatistics from './aggregateDailyStatistics';
import formatAggregatedStatistics from './formatAggregatedStatistics';

const generateWeeklySummary = ({
  data,
  editorsFilter = null,
  languagesFilter = null,
  projectsFilter = null,
  showEditors = null,
  showLanguages = null,
  showProjects = null,
}) => {
  const grandTotals = data.map((day) => {
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
  } = formatAggregatedStatistics(
    aggregateDailyStatistics({
      data,
      editorsFilter,
      languagesFilter,
      projectsFilter,
    }),
  );

  const weeklyGrandTotal = grandTotals
    .reduce((total, grandTotal) => total + grandTotal.totalSeconds, 0);
  const formattedWeeklyGrandTotal = formatTime(new Date(weeklyGrandTotal * 1000));

  const showAllSections = showEditors == null && showLanguages == null && showProjects == null;

  console.log(chalk.cyan.bold(`⏳  Total For Past 7 Days: ${chalk.magenta.bold(formattedWeeklyGrandTotal)}\n`));

  generateSection({ name: '📅  By Day', data: grandTotals });

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

export default generateWeeklySummary;
