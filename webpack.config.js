const path = require('path');


const config = {
  entry: './src/index.js',
  output: {
  	path: path.resolve(__dirname, 'build'),
  	filename: 'bundle.js'
  },
  module: {
  	rules: [
      {
      	use: 'bable-loader'
      }

  	]
  }

};

module.exports = config;