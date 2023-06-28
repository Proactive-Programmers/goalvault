const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },

  target: 'web',
  devServer: {
    port: '3000',
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
    proxy: {
      '/login/**': {
        target: 'http://localhost:8080/',
        secure: false,
      },
      '/goals/**': {
        target: 'http://localhost:8080/',
        secure: false,
      },
      '/logout/**': {
        target: 'http://localhost:8080/',
        secure: false,
      },
      '/tasks/**': {
        target: 'http://localhost:8080/',
        secure: false,
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       type: 'javascript/auto'
      },
    ],
  },
};
