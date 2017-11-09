var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    'main': './app/javascript/main',
    'app': './app/javascript/index.jsx'
  },

  output: {
    path: path.join(__dirname, '/app/backend/static/build'),
    publicPath: './',
    filename: '[name].js',
  },

  // Jquery imported into global context from main (using script-loader)
  externals: {
      // require("jquery") is external and available on the global var jQuery
      "jquery": "jQuery",
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    //global jquery is provided to any webpack modules
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
      'window.jQuery': 'jquery',
    }),

    //copy patternfly assets
    new CopyWebpackPlugin([
      {
        from: { glob: './node_modules/patternfly/dist/img/*.*'},
        to: './img',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/fonts/*.*'},
        to: './fonts',
        flatten: true
      },
      {
        from: { glob: './node_modules/patternfly/dist/css/*.*'},
        to: './css',
        flatten: true
      },
      {
        from: { glob: './node_modules/react-bootstrap-table/css/*.*'},
        to: './css',
        flatten: true
      }
    ]),

  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ["react", "es2015", "stage-2"]
        },
      },
      {
        loader: 'eslint-loader',
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ],
  },
};

