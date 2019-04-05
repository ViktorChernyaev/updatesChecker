require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");

const { TELEGRAM_BOT_TOKEN } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
