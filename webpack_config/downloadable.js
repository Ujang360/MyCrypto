const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const production = require('./production');
const config = require('./config');

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = merge.smart(production, {
  output: {
    path: path.join(config.path.output, 'download'),
    publicPath: './'
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      'BUILD_DOWNLOADABLE': 'true',
      'BUILD_HTML': 'true',
      ETHERSCAN_API_KEY
    })
  ]
});
