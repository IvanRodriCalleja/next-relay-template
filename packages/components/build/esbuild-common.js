/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const entryPoint = path.resolve(__dirname, '../index.tsx');
const outfile = path.resolve(__dirname, '../dist/index.js');
const inject = path.resolve(__dirname, './react-shim.js');
const tsconfig = path.resolve(__dirname, '../tsconfig.json');

const esBuildConfig = {
	entryPoints: [entryPoint],
	outfile,
	bundle: true,
	inject: [inject],
	external: ['react'],
	format: 'esm',
	tsconfig
};

module.exports = {
	esBuildConfig
};
