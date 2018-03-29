#!/usr/bin/env node

import { getDailySummary } from '../';

const execute = async () => {
  try {
    await getDailySummary();
  } catch (error) {
    console.error('😞  Rut ro, an error occurred');
    console.error(error);
  }
};

execute();
