// VITEST

import { postIdParser } from './postIdParser';
import { describe, it, expect } from '@jest/globals';

const examples = [
	'https://linevoom.line.me/post/1169675818142163333',
	'http://linevoom.line.me/post/1169675818142163333',
	'://linevoom.line.me/post/1169675818142163333',
	'discord.line.me/post/1169675818142163333',
	'discord://linevoom.line.me/post/1169675818142163333',
	'line://~/post/1169675818142163333',
	'line://~/post/1169675818142163333///',
	'https://linevoom.line.me/post/1169675818142163333?a=b/&post=://',
	'/1169675818142163333',
	'1169675818142163333',
	'https://linevoom.line.me/post/1169675818142163333#comment-1169675818142163333',
	'linevoom.line.me/post/1169675818142163333#comment-1169675818142163333'
];

const result = '1169675818142163333';

describe('postIdParser', () => {
	examples.forEach((example) => {
		it("should return '" + result + "' for '" + example + "'", async () => {
			await expect(postIdParser(example)).toBe(result);
		});
	});
});
