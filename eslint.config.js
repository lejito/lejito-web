import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
      "no-console": ["off"],
      eqeqeq: "warn",
      curly: "off",
      semi: "off",
    },
  },
];
