import { WakaTimeClient } from 'wakatime-client';

import setup from './setup';
import { get } from './services/apiKeyStore';
import generateSection from './services/generateSection';

const getDailySummary = async (date = new Date()) => {
  let apiKey = await get();

  if (!apiKey) {
    await setup();
    apiKey = await get();
  }

  // PAGING HACKY AS FUCK, PAGING HACKY AS FUCK
  const formattedDate = date.toISOString().split('T')[0];

  const client = new WakaTimeClient(apiKey);
  const summary = await client.getMySummary({
    dateRange: {
      startDate: formattedDate,
      endDate: formattedDate,
    },
  });

  const {
    grand_total: grandTotal,
    editors,
    languages,
    projects,
  } = summary.data.data[0];

  console.log(`Total: ${grandTotal.text}`);

  generateSection({ name: 'Editors', data: editors });
  generateSection({ name: 'Languages', data: languages });
  generateSection({ name: 'Projects', data: projects });
};

export default getDailySummary;
