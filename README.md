# Validate-NISS

[![npm version](https://img.shields.io/npm/v/@edyspider/validate-niss)](https://www.npmjs.com/package/@edyspider/validate-niss)
[![CI](https://github.com/edyspider/validate-niss/actions/workflows/ci.yml/badge.svg)](https://github.com/edyspider/validate-niss/actions/workflows/ci.yml)

A small, dependency-free package to validate and generate Portuguese social security identification numbers (NISS).

Works with ES modules, CommonJS and TypeScript (types included).

---

## Requirements

- Node.js 22.12 or later (also works with Bun, Deno and browsers through a bundler or CDN)

## Installation

```sh
npm i @edyspider/validate-niss
```

## Usage

### ES modules

```js
import { validateNISS, randomNISS } from '@edyspider/validate-niss';

console.log(validateNISS('12345678910')); // true
console.log(validateNISS('99999999999')); // false
console.log(randomNISS()); // e.g. '12109072813'
```

### CommonJS

```js
const { validateNISS, randomNISS } = require('@edyspider/validate-niss');

console.log(validateNISS('12345678910')); // true
```

### TypeScript

```ts
import { validateNISS, randomNISS } from '@edyspider/validate-niss';

const input: unknown = '12345678910';
const isValid: boolean = validateNISS(input);
const niss: string = randomNISS();
```

### Deno

```js
import { validateNISS } from 'npm:@edyspider/validate-niss';
```

### Browser (CDN, no bundler)

```js
import { validateNISS } from 'https://cdn.jsdelivr.net/npm/@edyspider/validate-niss@2/+esm';
```

## API

### `validateNISS(value: unknown): boolean`

Returns `true` when `value` is a string with 11 digits that:

- starts with `1` (singular person) or `2` (collective person);
- ends with a correct check digit (weights 29, 23, 19, 17, 13, 11, 7, 5, 3, 2 on the first 10 digits; check digit = 9 − (sum mod 10)).

Any other value (numbers, `null`, `undefined`, objects, strings with spaces) returns `false`.

### `randomNISS(): string`

Returns a random valid NISS, starting with `1` or `2`.

## Known Issues

- [**Issues**](https://github.com/edyspider/validate-niss/issues)

## Authors

- [**EdySpider**](https://github.com/edyspider/)

## License

- **[MIT license](https://github.com/edyspider/validate-niss/blob/main/LICENSE)**
- Copyright 2024 &copy; [EdySpider](https://github.com/edyspider/)