import promptAccessToken from './prompters/promptAccessToken';
import { set } from './services/apiKeyStore';

const setup = async () => {
  const { accessToken } = await promptAccessToken();
  await set(accessToken);
};

export default setup;
