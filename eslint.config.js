// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    // Match Prettier's Vue void-element style (`<input />`).
    "vue/html-self-closing": [
      "error",
      { html: { void: "always", normal: "always", component: "always" } },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
});
