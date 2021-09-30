module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: [
    'flowtype',
    'jest',
    'prettier',
    'extra-rules',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'max-params': ['error', {max: 7}],
    'max-statements': ['error', {max: 100}],
    'max-lines': ['error', {max: 1000}],
    'max-len': 0,
    complexity: ['error', {max: 20}],
    'react/jsx-props-no-spreading': 'off',
    'object-shorthand': ['warn', 'properties'],
    'array-callback-return': 'error',
    'no-undef': 'error',
    'class-methods-use-this': 'off',
    'extra-rules/no-commented-out-code': 'error',
    'global-require': 0,
    'import/extensions': 0,
    'no-param-reassign': ['error', {props: false}],
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['**/*-test.js', 'jestSetupFile.js'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
