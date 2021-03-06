module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-shadow': [
      'error',
      {
        hoist: 'functions',
        allow: [
          'resolve',
          'reject',
          'done',
          'next',
          'error',
        ],
      },
    ],
  },
};
