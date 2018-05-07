const aggregateDailyStatistics = data => (
  data.reduce((totals, day) => {
    const newTotals = totals;
    const {
      editors,
      languages,
      projects,
    } = day;

    editors.forEach(({ name, total_seconds: totalSeconds }) => {
      let weeklyTotal = totals.editors[name] || 0;
      weeklyTotal += totalSeconds;
      newTotals.editors[name] = weeklyTotal;
    });

    languages.forEach(({ name, total_seconds: totalSeconds }) => {
      let weeklyTotal = totals.languages[name] || 0;
      weeklyTotal += totalSeconds;
      newTotals.languages[name] = weeklyTotal;
    });

    projects.forEach(({ name, total_seconds: totalSeconds }) => {
      let weeklyTotal = totals.projects[name] || 0;
      weeklyTotal += totalSeconds;
      newTotals.projects[name] = weeklyTotal;
    });

    return newTotals;
  }, { editors: {}, languages: {}, projects: {} })
);

export default aggregateDailyStatistics;
