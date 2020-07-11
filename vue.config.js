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
  },
  "transpileDependencies": [
    "vuetify"
  ]
}