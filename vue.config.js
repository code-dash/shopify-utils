const prefixer = require('postcss-prefix-selector');

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    output: {
      filename: 'bundle.js'
    }
  },
  filenameHashing: false,
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [
          prefixer({
            transform: function (prefix, selector, prefixedSelector) {
              if (selector.startsWith('svg')) {
                console.log(prefix, 'prefix', selector, 'selector', prefixedSelector, 'prefixed');
                return '#shopify-utils-wrapper svg' + selector.substring(3);
              }else {
                return selector;
              }
            }
          })
        ]
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}