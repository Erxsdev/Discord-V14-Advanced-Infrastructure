# Discord-V14-Advanced-Infrastructure

[![GitHub stars](https://img.shields.io/github/stars/erxsdev/Discord-V14-Advanced-Infrastructure?style=social)](https://github.com/erxsdev/Discord-V14-Advanced-Infrastructure/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/erxsdev/Discord-V14-Advanced-Infrastructure?style=social)](https://github.com/erxsdev/Discord-V14-Advanced-Infrastructure/network)
[![GitHub license](https://img.shields.io/github/license/erxsdev/Discord-V14-Advanced-Infrastructure)](https://github.com/erxsdev/Discord-V14-Advanced-Infrastructure/blob/main/LICENSE)

A robust and scalable Discord.js v14 framework developed by Erxsdev, designed to streamline the development of advanced Discord bots with modular architecture and modern features.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Steps](#steps)
- [License](#license)
- [Contact](#contact)

## About

`Discord-V14-Advanced-Infrastructure` is a powerful framework built on [Discord.js v14](https://discord.js.org/), a popular Node.js library for interacting with the Discord API. Developed by Erxsdev, this framework provides a structured foundation for creating feature-rich Discord bots efficiently. It emphasizes modularity, scalability, and ease of use, making it suitable for both beginners and advanced developers working on multipurpose or specialized Discord bots.

This framework is ideal for projects requiring slash commands, event handling, and advanced bot functionalities, such as moderation, music playback, or custom interactions, all while leveraging the latest features of Discord.js v14.

## Features

- **Modular Command System**: Easily create and manage slash commands, message commands, and context menus with a clean, organized structure.
- **Advanced Event Handling**: Handle Discord events (e.g., `ready`, `messageCreate`, `interactionCreate`) using a modular event system for flexibility and scalability.
- **Slash Command Integration**: Full support for Discord.js v14’s slash commands, buttons, and select menus for modern Discord interactions.
- **Logging System**: Comprehensive logging with customizable levels (e.g., `debug`, `info`, `error`) and output to console or files for debugging and monitoring.
- **JSON-Based Database**: Lightweight data storage using JSON files (e.g., via `lowdb`) for managing user data, server settings, or command states.
- **Scalable Architecture**: Supports projects of any size, from small bots to large-scale applications, with a focus on maintainability.
- **TypeScript Compatibility**: Optional TypeScript support for type-safe development and better code organization.
- **Error Handling**: Robust error handling to prevent crashes and provide meaningful error messages.
- **Environment-Based Configuration**: Configure bot settings, tokens, and database paths using environment variables or config files.
- **Community-Driven Development**: Open to contributions, with clear guidelines for adding features or fixing bugs.

## Installation

To set up the `Discord-V14-Advanced-Infrastructure` framework, follow these steps:

### Prerequisites

- **Node.js**: Version 16.9.0 or higher (required for Discord.js v14).
- **npm**: Node package manager (included with Node.js).
- **Discord Bot Token**: Obtain a bot token from the [Discord Developer Portal](https://discord.com/developers/applications).
- **Git**: Optional, for cloning the repository.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/erxsdev/Discord-V14-Advanced-Infrastructure.git
   cd Discord-V14-Advanced-Infrastructure

2. **Install dependencies**:
   ```bash
   npm install || npm i

3. **Edit the .env file**:
   ```bash
   TOKEN=YourBotToken

4. **Start the Bot**:
   ```bash
   npm run start || npm . || start.bat ---> open or cmd

### Licence
This project is licensed under the [MIT License](https://github.com/erxsdev/Discord-V14-Advanced-Infrastructure/blob/main/LICENSE).
