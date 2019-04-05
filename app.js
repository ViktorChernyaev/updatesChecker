// require("dotenv").config({ silent: process.env.NODE_ENV === "production" });

const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const { TELEGRAM_BOT_TOKEN } = process.env;
  console.log(TELEGRAM_BOT_TOKEN);

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

bot.sendMessage(131075441, "check");
