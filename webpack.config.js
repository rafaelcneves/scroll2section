const path = require('path');

module.exports = {
  entry: './src/scroll2section.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scroll2section.js',
  },
};
