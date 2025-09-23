// prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
    {
      files: ["*.css"],
      options: {
        parser: "css",
      },
    },
    {
      files: ["*.json"],
      options: {
        parser: "json",
      },
    },
  ],
};
