#!/usr/bin/env node

import { getDailySummary } from '..';

const execute = async () => {
  try {
    // GROSS
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    await getDailySummary(yesterday);
  } catch (error) {
    console.error('😞  Rut ro, an error occurred');
    console.error(error);
  }
};

execute();
