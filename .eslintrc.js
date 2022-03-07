module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: { requireConfigFile: false },
  extends: [
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-var': 2,
    'no-console': 1,
    'no-unused-vars': 2,
    'react/prop-types': 0,
    'react-display-name': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
