import { WakaTimeClient } from 'wakatime-client';
import {
  DateTime,
} from 'luxon';

import setup from './setup';
import { get } from './services/apiKeyStore';
import generateWeeklySummary from './services/generateWeeklySummary';
import {
  DATE_FORMAT,
} from './constants';

const getWeeklySummary = async ({
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

  const endDate = DateTime.local();
  const localizedEndDate = endDate.setZone(timezone);
  const localizedStartDate = localizedEndDate.minus({ days: 6 });
  const formattedStartDate = localizedStartDate.toFormat(DATE_FORMAT);
  const formattedEndDate = localizedEndDate.toFormat(DATE_FORMAT);

  const summary = await client.getMySummary({
    dateRange: {
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    },
  });
  generateWeeklySummary({
    data: summary.data,
    editorsFilter,
    languagesFilter,
    projectsFilter,
    showEditors,
    showLanguages,
    showProjects,
  });
};

export default getWeeklySummary;
