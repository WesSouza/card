module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_\\d*$' },
    ],
  },
  settings: {},
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      excludedFiles: ['*.css.d.ts', '*.test.ts', '*.test.tsx'],
    },
  ],
};
