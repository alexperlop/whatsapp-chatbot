import BotWhatsapp from "@bot-whatsapp/bot";
import { helloFlow } from "./hello.js";
import { welcomeFlow } from "./welcome-flow.js";

export default BotWhatsapp.createFlow([helloFlow, welcomeFlow]);
