import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const config: webpack.Configuration = {
  mode: 'production',

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [htmlPlugin]
};

export default config;