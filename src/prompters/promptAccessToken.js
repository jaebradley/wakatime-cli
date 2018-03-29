import inquirer from 'inquirer';

const promptApiKey = async () => (
  inquirer.prompt([
    {
      type: 'password',
      name: 'accessToken',
      message: 'Enter your Wakatime API Key',
    },
  ])
);

export default promptApiKey;
