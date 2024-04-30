const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.on("ready", () => {
  console.log("Bot is ready!");
  bot.editStatus("idle", { name: "Bot is idle" }); // Set status to idle with a custom status message
});

bot.connect(); // Get the bot to connect to Discord
