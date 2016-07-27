module.exports = {
  entry: {
    'app': './source/app.js',
    'specs': './source/specs.js'
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
      { app: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
