import formatTime from './formatTime';

const formatTotals = totals => (
  Object.keys(totals).map(name => ({
    name,
    text: formatTime(new Date(totals[name] * 1000)),
    percent: totals[name],
  })).sort((first, second) => second.percent - first.percent)
);

const formatAggregatedStatistics = ({
  editors: editorTotals,
  languages: languagesTotals,
  projects: projectsTotals,
}) => ({
  editors: formatTotals(editorTotals),
  languages: formatTotals(languagesTotals),
  projects: formatTotals(projectsTotals),
});

export default formatAggregatedStatistics;
