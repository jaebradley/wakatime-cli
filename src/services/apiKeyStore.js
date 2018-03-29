import keytar from 'keytar';

import { SERVICE_NAME, ACCOUNT_NAME } from '../constants';

const get = async () => keytar.getPassword(SERVICE_NAME, ACCOUNT_NAME);
const set = async password => keytar.setPassword(SERVICE_NAME, ACCOUNT_NAME, password);

export {
  get,
  set,
};
