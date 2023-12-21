/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest/presets/default-esm',
	moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'mts', 'tsx', 'json', 'node'],
	resolver: '<rootDir>/mjs-resolver.cjs',
	testMatch: ['**/__tests__/**/*.?(m)[jt]s?(x)', '**/?(*.)+(spec|test).?(m)[tj]s?(x)'],
	transform: {
		'^.+\\.m?tsx?$': [
			'ts-jest',
			{
				useESM: true
			}
		]
	}
};
