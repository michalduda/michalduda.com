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
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "always"
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
