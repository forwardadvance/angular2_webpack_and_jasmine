module.exports = {
  entry: {
    'app': './source/app.js'
  },
  output: {
    filename: './build/app.js',
  },
  sourceMap: true,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { app: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
