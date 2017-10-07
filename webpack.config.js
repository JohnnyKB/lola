const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      lib: ['Vue']
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'vue',
          entry: 'dist/vue.js',
          global: 'Vue'
        }
      ]
    })
    // See API section
  ]
};
