import OpenAI from "openai";
import { generatePrompt } from "./prompt.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runChatGPT = async (name, history, messages) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: generatePrompt(name, history, messages),
      },
      ...history,
    ],
    max_tokens: 800,
    temperature: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    top_p: 1,
    maxRetries: 0,
  });

  return response.data.choices[0].message.content;
};

export const runDetermine = async (history) => {
  const promtp = generatePromptDetermine();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: promtp,
      },
      ...history,
    ],
    temperature: 1,
    max_tokens: 800,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    maxRetries: 0,
  });
  return response.choices.length > 0 &&
    response.choices[0].message.role === "user"
    ? response.choices[0].message.content
    : "unknown";
};
