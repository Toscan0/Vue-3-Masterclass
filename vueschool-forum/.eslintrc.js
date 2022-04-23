module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'no-multi-spaces': 'off',
    'eol-last': 'off',
    'spaced-comment': 'off',
    'quotes': 'off',
    'spaced-comment': 'off',
    'semi': 'off',
  }
}
