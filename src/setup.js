import promptApiKey from './prompters/promptApiKey';
import { set } from './services/apiKeyStore';

const setup = async () => {
  const { apiKey } = await promptApiKey();
  await set(apiKey);
};

export default setup;
