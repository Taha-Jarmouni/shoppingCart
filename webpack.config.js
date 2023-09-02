const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static :{
      directory: path.resolve(__dirname, 'dist')
    },
    port : 3000,
    open: true,
    hot:true, 
    compress: true, 
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'store.html',
      template: './src/store.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'team.html',
      template: './src/team.html',
    }),
  ],
};
