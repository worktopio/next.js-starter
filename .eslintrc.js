module.exports = {
  extends: ['next', 'prettier'],
  plugins: ['unicorn'],
  rules: {
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'off',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase'
      }
    ]
  }
};
