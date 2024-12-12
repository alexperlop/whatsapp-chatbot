import BotWhatsapp from "@bot-whatsapp/bot";

export const helloFlow = BotWhatsapp.addKeyword(["hola", "buenas"]).addAnswer(
  "🙌 Hola bienvenido a REVUELO, en que podemos ayudarte?"
);
