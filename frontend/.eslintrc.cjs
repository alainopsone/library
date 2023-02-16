module.exports = {
  env: {
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }]
  }
}
