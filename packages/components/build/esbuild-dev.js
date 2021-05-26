/* eslint-disable @typescript-eslint/no-var-requires */
//TODO: Change to ts file?
const { build } = require('esbuild');
const { esBuildConfig } = require('./esbuild-common');

const esBuildDevConfig = {
	minify: false,
	sourcemap: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('watch build failed:', error);
			else console.log('watch build succeeded:', result);
		}
	}
};

build({
	...esBuildConfig,
	...esBuildDevConfig
})
	.then(report => console.log(report))
	.catch(() => process.exit(1));
