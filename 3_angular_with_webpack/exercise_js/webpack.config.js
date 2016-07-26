module.exports = {
  entry: {
    'app': './source/app.js'
  },
  output: {
    filename: './build/[name].js',
  },
  sourceMap: true,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
