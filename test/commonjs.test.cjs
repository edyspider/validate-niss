const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateNISS, randomNISS } = require('@edyspider/validate-niss');

test('works with require()', () => {
    assert.equal(typeof validateNISS, 'function');
    assert.equal(typeof randomNISS, 'function');
    assert.equal(validateNISS('12345678910'), true);
    assert.equal(validateNISS(randomNISS()), true);
});