import { WakaTimeClient } from 'wakatime-client';

import setup from './setup';
import { get } from './services/apiKeyStore';
import generateWeeklySummary from './services/generateWeeklySummary';

const getWeeklySummary = async ({
  editorsFilter = null,
  languagesFilter = null,
  projectsFilter = null,
}) => {
  let apiKey = await get();

  if (!apiKey) {
    await setup();
    apiKey = await get();
  }

  const startDate = new Date(new Date().setDate(new Date().getDate() - 6));
  const endDate = new Date();
  const formattedStartDate = startDate.toISOString().split('T')[0];
  const formattedEndDate = endDate.toISOString().split('T')[0];

  const client = new WakaTimeClient(apiKey);
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
  });
};

export default getWeeklySummary;
