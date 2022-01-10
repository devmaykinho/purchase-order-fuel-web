const path = require('path');

module.exports = 'jest-files-mock';

module.exports = {
  process(src, filename, config, options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};