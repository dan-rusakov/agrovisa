module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/app.scss";`
      }
    }
  },

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  }
};
