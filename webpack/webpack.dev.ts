import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html'
});

const config: Configuration = {
  mode: 'development',

  entry: './src/index.tsx',

  output:{
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [htmlPlugin],

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    historyApiFallback: true,
    hot: true,
    port: 3000
  }
};

export default config;