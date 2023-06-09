module.exports = {
  extends: ['eslint:recommended', 'next', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn'],
  rules: {
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase'
      }
    ]
  },
  root: true
};
