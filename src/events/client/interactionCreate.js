const chalk = require("chalk");
const logger = require('../../utils/helpers/logger');
const { handleError } = require('../../utils/helpers/errorHandler');

module.exports = {
  name: "interactionCreate",
  async execute(client, interaction) {
    if (!interaction.isChatInputCommand()) return;
    
    await logger.logCommand(interaction);

    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.log(
        chalk.gray('[') +
        chalk.hex('#ff0000')('-') +
        chalk.gray(']') +
        chalk.hex('#ff0000')(' Error Command not found: ' + interaction.commandName)
      );
      await logger.logError(new Error(`Command not found: ${interaction.commandName}`));
      await handleError(new Error(`Command not found: ${interaction.commandName}`), interaction);
      return;
    }

    try {
      await command.run(client, interaction);
    } catch (error) {
      console.log(
        chalk.gray('[') +
        chalk.hex('#ff0000')('-') +
        chalk.gray(']') +
        chalk.hex('#ff0000')(' Error Interaction failed: ' + error.message + '.')
      );
      await logger.logError(error, `Interaction failed: ${interaction.commandName}`);
      await handleError(error, interaction);
    }
  },
};