const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const cron = require("node-cron");

const { TELEGRAM_BOT_TOKEN, TELEGRAM_GROUP_ID, GITHUB_REPO_NAME, CRON_SCHEDULE } = process.env;

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

function sendCountToGroup(count = 1) {
  return bot.sendMessage(TELEGRAM_GROUP_ID, `996icu now have ${count} stars`);
}

const headers = { "Accept": "application/vnd.github.v3+json" };
function getStarsCount() {
  return axios.get(`https://api.github.com/repos/${GITHUB_REPO_NAME}`, { headers })
    .then(({ data }) => data.stargazers_count)
    .catch(e => console.log(e));
}

cron.schedule(CRON_SCHEDULE, () => getStarsCount().then(sendCountToGroup));
