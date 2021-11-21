const path = require('path')

const addStyleResource = rule => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/helpers.scss')]
    })
}

module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
