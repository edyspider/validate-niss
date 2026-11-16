import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { validateNISS, randomNISS } from '@edyspider/validate-niss';

const WEIGHTS = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];

/**
 * Builds a NISS from a first digit, padding with zeros and adding the check digit.
 * @param {string} firstDigit
 * @returns {string}
 */
function buildNISS(firstDigit) {
    const base = firstDigit.padEnd(10, '0');
    const sum = [...base].reduce((total, digit, index) => total + Number(digit) * WEIGHTS[index], 0);
    return base + (9 - (sum % 10));
}

describe('validateNISS', () => {
    test('accepts valid NISS numbers', () => {
        assert.equal(validateNISS('12345678910'), true);
        assert.equal(validateNISS('12109072813'), true);
        assert.equal(validateNISS('10158266749'), true);
        assert.equal(validateNISS('13071480279'), true);
    });

    test('rejects invalid NISS numbers', () => {
        assert.equal(validateNISS('1234567890'), false); // Too short
        assert.equal(validateNISS('012345678910'), false); // Too long
        assert.equal(validateNISS('02109072813'), false); // Invalid start
        assert.equal(validateNISS('12109272813'), false); // Invalid middle
        assert.equal(validateNISS('12109072812'), false); // Invalid end (check digit)
    });

    test('rejects invalid input types', () => {
        assert.equal(validateNISS('abcdefghijk'), false); // Letters instead of digits
        assert.equal(validateNISS(' 12345678910'), false); // Leading space
        assert.equal(validateNISS('12345678910\n'), false); // Trailing new line
        assert.equal(validateNISS(12345678910), false); // Number instead of string
        assert.equal(validateNISS(null), false);
        assert.equal(validateNISS(''), false);
        assert.equal(validateNISS(undefined), false);
    });

    for (const firstDigit of ['1', '2']) {
        test(`accepts a NISS starting with ${firstDigit}`, () => {
            assert.equal(validateNISS(buildNISS(firstDigit)), true);
        });
    }

    test('rejects a NISS starting with any other digit', () => {
        for (const firstDigit of ['0', '3', '4', '5', '6', '7', '8', '9']) {
            assert.equal(validateNISS(buildNISS(firstDigit)), false, `first digit ${firstDigit}`);
        }
    });
});

describe('randomNISS', () => {
    test('generates valid NISS numbers', () => {
        for (let i = 0; i < 1000; i++) {
            const niss = randomNISS();
            assert.equal(typeof niss, 'string');
            assert.equal(niss.length, 11);
            assert.equal(validateNISS(niss), true, `generated ${niss}`);
        }
    });
});