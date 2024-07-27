module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["react-refresh"],
  extends: [
    "./.eslintrc-auto-import.json",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "eslint-config-prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/no-mutable-exports": "off",
    "react-refresh/only-export-components": "warn",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
