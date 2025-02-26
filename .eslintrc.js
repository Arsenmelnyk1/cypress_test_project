import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]; module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
  ],
  ignorePatterns: ['public/**'],
  overrides: [
    {
      files: ['*.cy.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'sonarjs/no-unused-collection': 'off',
        'prettier/prettier': ['off', {}, { usePrettierrc: true }],
        'no-console': 'off',
      },
    },
  ],
  rules: {
    'unicorn/prevent-abbreviations': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'unicorn/no-null': 0,
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'security/detect-object-injection': 'off',
    'react/prop-types': 'off',
    'unicorn/filename-case': 'off',
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-unknown-property': 0,
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [],
      },
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['presentation'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'cypress/unsafe-to-chain-command': 0,
  },
};
