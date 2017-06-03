// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    quotes: ["error", "single"],
    indent: ['error', 2, {SwitchCase: 1}],
    // enforce consistent spacing before and after semicolons
    'semi-spacing': 'error',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    /*
     * Variables
     */

    // 不允许标签与变量同名
    'no-label-var': 'error',

    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',
    'no-undef': 'off',
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'error',

    /*
     * Node.js and CommonJS
     */

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',
  }
}
