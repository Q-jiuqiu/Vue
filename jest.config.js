// 配置项讲解 https://blog.csdn.net/weixin_41697143/article/details/82913388/
// const path = require('path');

module.exports = {
  // rootDir当前目录，一般是package.json所在的目录。
  // rootDir: path.resolve(__dirname, '../../'),

  // 测试文件的类型
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  // 设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
  testMatch: [
    // '**src/components/**/*.spec.(js|jsx]ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],

  // 层次显示测试套件中每个测试的结果
  verbose: true
}
