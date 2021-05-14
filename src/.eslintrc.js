module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true, // ブラウザのグローバル変数を有効化
  },
  // parser: 'babel-eslint', // 変更
  // parser: '@babel-eslint/parser', // 本来はこっちにしたい。

  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'prettier',
    'jsx-a11y', // 追加 // 取りあえずのエラー回避ないので、無くしたい。
  ],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-unused-vars': 'off', // 追加 // 取りあえずのエラー回避ないので、無くしたい。
    'no-use-before-define': 'off', // 変数を宣言前に使用することを許容しない
    'import/no-extraneous-dependencies': 'off', // devDependencies を許容しない
    'import/no-duplicates': 'off', // 重複した import 文を許容しない
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], // import ファイルの拡張子をつけることを許容しない
    'no-shadow': 'off', // スコープ内の変数とスコープ外の変数を重複して使用しないこと
    'import/extensions': [0, 'never'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // ++ 記述を許容しない
    'react/jsx-props-no-spreading': 'off', // propsの分割代入を許容しない
    'no-alert': 'off', // alert を許容しない
    // 'no-console':"off", // console を許容しない
    'react/prop-types': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
