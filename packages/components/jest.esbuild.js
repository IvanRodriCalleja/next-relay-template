/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const inject = path.resolve(__dirname, './build/react-shim.js');

module.exports = {
	sourcemap: true,
	inject: [inject]
};
