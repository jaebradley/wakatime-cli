import inquirer from 'inquirer';

const promptApiKey = async () => (
  inquirer.prompt([
    {
      type: 'password',
      name: 'apiKey',
      message: 'Enter your WakaTime API Key',
    },
  ])
);

export default promptApiKey;
