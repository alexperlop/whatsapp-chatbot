import pluginBotWhatsapp from "eslint-plugin-bot-whatsapp";
export default {
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: "latest", // Versión de ECMAScript
    sourceType: "module", // Usar ES Modules
    globals: {
      browser: true,
      node: true,
    },
  },
  plugins: {
    "bot-whatsapp": pluginBotWhatsapp,
  },
};
