module.exports = {
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	roots: ['<rootDir>/tests'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': [
			'esbuild-jest-transform',
			{
				sourcemap: true,
				loaders: {
					'.spec.ts': 'tsx'
				}
			}
		]
	}
};

//https://github.com/facebook/jest/issues/11452
