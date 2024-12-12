import BotWhatsapp from "@bot-whatsapp/bot";
import { runChatGPT } from "../services/openai/index.js";

export const welcomeFlow = BotWhatsapp.addKeyword(
  BotWhatsapp.EVENTS.WELCOME
).addAction(async (ctx, { flowDynamic, state }) => {
  try {
    const newHistory = state.getMyState()?.history ?? [];
    const name = ctx?.pushName ?? "Usuario";
    newHistory.push({
      role: "user",
      content: ctx.body,
    });
    const ia = await runChatGPT(name, newHistory, ctx.messages);
    await flowDynamic(ia);
    newHistory.push({
      role: "user",
      content: ia,
    });
    await state.update({
      history: newHistory,
    });
  } catch (error) {
    console.error("error", error);
  }
});
