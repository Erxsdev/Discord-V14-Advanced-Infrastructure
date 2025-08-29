const { Client, GatewayIntentBits, Partials } = require("discord.js");
const chalk = require("chalk");
const fs = require("fs").promises;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const logger = require('./utils/helpers/logger');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.User],
});

client.commands = new Map();

const loadCommands = async () => {
  const commandsDir = path.join(__dirname, "commands");
  try {
    const commandFiles = (await fs.readdir(commandsDir)).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of commandFiles) {
      const command = require(path.join(commandsDir, file));

      if (command.data) {
        command.name = command.data.name;
        command.description = command.data.description;
        command.options = command.data.options;
        command.type = command.data.type;
        command.dm_permission = command.data.dm_permission;

        if (command.execute && !command.run) {
          command.run = command.execute;
        }
      }
      client.commands.set(command.name, command);
      console.log(
        chalk.gray`[` +
          chalk.hex("#FFFFFF")`+` +
          chalk.gray`]` +
          chalk.hex("#FFFFFF")`${command.name}` +
          ` Command Loaded.`
      );
      await logger.log(`Command Loaded: ${command.name}`, 'INFO');
    }
  } catch (error) {
    console.log(
      chalk.gray('[') +
      chalk.hex('#ff0000')('-') +
      chalk.gray(']') +
      chalk.hex('#ff0000')(' Error Failed to load commands: ' + error.message + '.')
    );
    await logger.logError(error, 'Failed to load commands');
  }
};

const loadEvents = async () => {
  const eventsDir = path.join(__dirname, "events", "client");
  try {
    const eventFiles = (await fs.readdir(eventsDir)).filter((file) =>
      file.endsWith(".js")
    );
    if (eventFiles.length === 0) {
      console.log(
        chalk.gray('[') +
        chalk.hex('#ff0000')('-') +
        chalk.gray(']') +
        chalk.hex('#ff0000')(' Error No event files found in ' + eventsDir + '.')
      );
      await logger.logError(new Error(`No event files found in ${eventsDir}`));
      return;
    }
    for (const file of eventFiles) {
      const event = require(path.join(eventsDir, file));
      if (!event.name || !event.execute) {
        console.log(
          chalk.gray('[') +
          chalk.hex('#ff0000')('-') +
          chalk.gray(']') +
          chalk.hex('#ff0000')(' Error Invalid event in ' + file + ': Missing name or execute function.')
        );
        await logger.logError(new Error(`Invalid event in ${file}: Missing name or execute function`));
        continue;
      }
      if (event.modalExecute) {
        client.on(event.name, async (interaction) => {
          if (interaction.isModalSubmit()) {
            await event.modalExecute(client, interaction);
          } else {
            await event.execute(client, interaction);
          }
        });
      } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
      }
      console.log(
        chalk.gray`[` +
          chalk.hex("#FFFFFF")`+` +
          chalk.gray`]` +
          chalk.hex("#FFFFFF")`${event.name}` +
          ` Event Loaded.`
      );
      await logger.log(`Event Loaded: ${event.name}`, 'INFO');
    }
  } catch (error) {
    console.log(
      chalk.gray('[') +
      chalk.hex('#ff0000')('-') +
      chalk.gray(']') +
      chalk.hex('#ff0000')(' Error Failed to load events: ' + error.message + '.')
    );
    await logger.logError(error, 'Failed to load events');
  }
};

const startBot = async () => {
  try {
    await loadCommands();
    await loadEvents();
    const token = process.env.TOKEN;
    if (!token) throw new Error("No TOKEN provided in .env file");
    await client.login(token);
    console.log(
      chalk.gray('[') +
      chalk.hex('#00ff00')('+') +
      chalk.gray(']') +
      (' Bot Successfully started.')
    );
    await logger.log('Bot Successfully started', 'START');
  } catch (error) {
    console.log(
      chalk.gray('[') +
      chalk.hex('#ff0000')('-') +
      chalk.gray(']') +
      chalk.hex('#ff0000')(' Error Failed to start bot: ' + error.message + '.')
    );
    await logger.logError(error, 'Failed to start bot');
  }
};

startBot();