#!/usr/bin/env node

import { setup } from '..';

const execute = async () => {
  try {
    await setup();
    console.log('💯  - Your setup is complete!');
  } catch (error) {
    console.error('😞  Rut ro, an error occurred');
    console.error(error);
  }
};

execute();
