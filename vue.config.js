const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    output: {
      filename: 'app.js',
      chunkFilename: 'chunk.js',
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.endsWith('-widget'),
        },
      }));
    config.optimization.delete('splitChunks');
    if (config.plugins.has("extract-css")) {
      const extractCSSPlugin = config.plugin("extract-css");
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: 'app.css',
            chunkFilename: 'chunk.css',
          },
        ]);
    }
  },
};
