module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','rules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Additional Rules
    'quotes': ['warn','double'],
    'jsx-quotes': ['error', 'prefer-double'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    // 'custom-imports': 'error',
  },
};
