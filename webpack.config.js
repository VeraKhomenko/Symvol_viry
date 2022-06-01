const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // {
      //   test: /\.css$/i,
      //   loader: "css-loader",
      //   options: {
      //     url: {
      //       filter: (url, _resourcePath) => {
      //         // Disable processing for root-relative urls under /images
      //         return !/^\/images\//.test(url);

      //         // This would disable processing for all root-relative urls:
      //         // return !/^\//.test(url);
      //       },
      //     },
      //   },
      // },
      {
        test: /\.scss$/,
        use: [
          //  'style-loader',
          MiniCssExtractPlugin.loader,

          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 2303,
  },
};
