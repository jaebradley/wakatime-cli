#!/usr/bin/env node

import { getWeeklySummary } from '../';

const execute = async () => {
  try {
    await getWeeklySummary();
  } catch (error) {
    console.error('😞  Rut ro, an error occurred');
    console.error(error);
  }
};

execute();
