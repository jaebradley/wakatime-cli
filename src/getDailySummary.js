import { WakaTimeClient } from 'wakatime-client';
import {
  DateTime,
} from 'luxon';

import setup from './setup';
import { get } from './services/apiKeyStore';
import generateDailySummary from './services/generateDailySummary';
import getRegex from './services/getRegex';
import {
  DATE_FORMAT,
} from './constants';

const getDailySummary = async ({
  date = DateTime.local(),
  editorsFilter = null,
  languagesFilter = null,
  projectsFilter = null,
  showEditors = null,
  showLanguages = null,
  showProjects = null,
}) => {
  let apiKey = await get();

  if (!apiKey) {
    await setup();
    apiKey = await get();
  }

  const client = new WakaTimeClient(apiKey);
  const {
    data,
  } = await client.getMe();
  const {
    timezone,
  } = data;
  const localizedDate = date.setZone(timezone);
  const formattedDate = localizedDate.toFormat(DATE_FORMAT);
  const summary = await client.getMySummary({
    dateRange: {
      startDate: formattedDate,
      endDate: formattedDate,
    },
  });

  const filteredData = summary.data.map(({
    grand_total: grandTotal,
    range,
    editors,
    languages,
    projects,
  }) => ({
    grandTotal,
    range,
    editors: editors.filter(
      ({ name }) => editorsFilter == null || getRegex(editorsFilter).test(name),
    ),
    languages: languages.filter(
      ({ name }) => languagesFilter == null || getRegex(languagesFilter).test(name),
    ),
    projects: projects.filter(
      ({ name }) => projectsFilter == null || getRegex(projectsFilter).test(name),
    ),
  }));

  filteredData.forEach(({
    grandTotal,
    range,
    editors,
    languages,
    projects,
  }) => generateDailySummary({
    grandTotal,
    range,
    editors,
    languages,
    projects,
    showEditors,
    showLanguages,
    showProjects,
  }));
};

export default getDailySummary;
