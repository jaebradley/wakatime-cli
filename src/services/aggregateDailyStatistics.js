import getRegex from './getRegex';

const aggregateDailyStatistics = ({
  data,
  editorsFilter = null,
  languagesFilter = null,
  projectsFilter = null,
}) => (
  data.reduce((totals, day) => {
    const newTotals = totals;
    const {
      editors: editorsData,
      languages: languagesData,
      projects: projectsData,
    } = day;

    editorsData
      .filter(({ name }) => editorsFilter == null || getRegex(editorsFilter).test(name))
      .forEach(({ name, total_seconds: totalSeconds }) => {
        let weeklyTotal = totals.editors[name] || 0;
        weeklyTotal += totalSeconds;
        newTotals.editors[name] = weeklyTotal;
      });

    languagesData
      .filter(({ name }) => languagesFilter == null || getRegex(languagesFilter).test(name))
      .forEach(({ name, total_seconds: totalSeconds }) => {
        let weeklyTotal = totals.languages[name] || 0;
        weeklyTotal += totalSeconds;
        newTotals.languages[name] = weeklyTotal;
      });

    projectsData
      .filter(({ name }) => projectsFilter == null || getRegex(projectsFilter).test(name))
      .forEach(({ name, total_seconds: totalSeconds }) => {
        let weeklyTotal = totals.projects[name] || 0;
        weeklyTotal += totalSeconds;
        newTotals.projects[name] = weeklyTotal;
      });

    return newTotals;
  }, { editors: {}, languages: {}, projects: {} })
);

export default aggregateDailyStatistics;
