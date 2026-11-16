// src/index.js

const VALID_PREFIXES = ['1', '2'];
const WEIGHTS = [29, 23, 19, 17, 13, 11, 7, 5, 3, 2];

/**
 * Computes the check digit (11th digit) from the first 10 digits of a NISS.
 * @param {string} base The first 10 digits.
 * @returns {number}
 */
function computeCheckDigit(base) {
    const sum = WEIGHTS.reduce((total, weight, index) => total + Number(base[index]) * weight, 0);
    return 9 - (sum % 10);
}

/**
 * Returns a string with `count` random digits.
 * @param {number} count
 * @returns {string}
 */
function randomDigits(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10)).join('');
}

/**
 * Validates a Portuguese social security number (NISS).
 * @param {unknown} value
 * @returns {boolean}
 */
export function validateNISS(value) {
    if (typeof value !== 'string' || !/^\d{11}$/.test(value)) {
        return false;
    }

    if (!VALID_PREFIXES.includes(value[0])) {
        return false;
    }

    return computeCheckDigit(value.slice(0, 10)) === Number(value[10]);
}

/**
 * Generates a random valid Portuguese social security number (NISS).
 * @returns {string}
 */
export function randomNISS() {
    const prefix = VALID_PREFIXES[Math.floor(Math.random() * VALID_PREFIXES.length)];
    const base = prefix + randomDigits(9);
    return base + computeCheckDigit(base);
}