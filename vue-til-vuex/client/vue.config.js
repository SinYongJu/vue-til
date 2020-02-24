const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src/'),
        '@const': path.resolve('src/core/constants/'),
        '@mixins': path.resolve('src/core/mixins/'),
        '@plugins': path.resolve('src/core/plugins'),
        '@router': path.resolve('src/core/router'),
        '@store': path.resolve('src/core/store/'),
        '@api': path.resolve('src/api/'),
        '@scss': path.resolve('src/assets/scss/'),
        '@comp': path.resolve('src/components/'),
        '@pages': path.resolve('src/components/pages/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@scss/_variables";
          @import "@scss/_mixin";
        `
      }
    }
  }
}
