module.exports = {
  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],
  plugins: ['promise', 'import'],
  rules: {
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-var': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-eval': 'error',
    'no-loop-func': 'error',
    'default-param-last': 'error',
    'space-before-blocks': 'always',
    'no-param-reassign': ['error', { props: true }],
    'no-duplicate-imports': ['error', { includeExports: true }],
    'one-var': 'error',
    'operator-linebreak': ['error', 'before'],
    eqeqeq: ['error', 'smart'],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'import/first': ['error', { absoluteFirst: true }],
  },
};
