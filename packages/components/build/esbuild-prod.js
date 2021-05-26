/* eslint-disable @typescript-eslint/no-var-requires */
//TODO: Change to ts file?
const { build } = require('esbuild');
const { esBuildConfig } = require('./esbuild-common');

const esBuildProdConfig = {
	minify: true,
	sourcemap: false
};

build({
	...esBuildConfig,
	...esBuildProdConfig
})
	.then(report => console.log(report))
	.catch(() => process.exit(1));
