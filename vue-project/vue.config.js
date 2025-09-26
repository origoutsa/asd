const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/asd/'
    : '/'
})

// const path = require('path');
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   outputDir: path.resolve(__dirname, 'dist')
// });