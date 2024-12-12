import "dotenv/config.js";
import BotWhatsapp from "@bot-whatsapp/bot";
import database from "./database/index.js";
import provider from "./provider/index.js";
import flow from "./flow/index.js";

const main = async () => {
  await BotWhatsapp.createBot({
    flow,
    provider,
    database,
  });
};

main();
