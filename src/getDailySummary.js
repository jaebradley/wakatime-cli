import { WakaTimeClient } from 'wakatime-client';

import setup from './setup';
import { get } from './services/apiKeyStore';
import generateDailySummary from './services/generateDailySummary';

const getDailySummary = async (date = new Date()) => {
  let apiKey = await get();

  if (!apiKey) {
    await setup();
    apiKey = await get();
  }

  // PAGING DR.HACKY AS FUCK, PAGING DR.HACKY AS FUCK
  const formattedDate = date.toISOString().split('T')[0];

  const client = new WakaTimeClient(apiKey);
  const summary = await client.getMySummary({
    dateRange: {
      startDate: formattedDate,
      endDate: formattedDate,
    },
  });

  summary.data.forEach(({
    grand_total: grandTotal,
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
  }));
};

export default getDailySummary;
