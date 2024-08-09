# Validate-NISS

A NPM package to validate Portuguese social security identification number (NISS).

---

## Installation

```sh
npm i @edyspider/validate-niss
```

## Usage

```js
const validateNISS = require('@edyspider/validate-niss');

const validNISS = '12345678910';
const invalidNISS = '99999999999';

console.log(`Is ${validNISS} a valid NISS?`, validateNISS(validNISS));
console.log(`Is ${invalidNISS} a valid NISS?`, validateNISS(invalidNISS));
```

```sh
Is 12345678910 a valid NISS? true
Is 99999999999 a valid NISS? false
```

## Known Issues

* [**Issues**](https://github.com/edyspider/validate-NISS/issues)

## Authors

* [**EdySpider**](https://github.com/edyspider/)

## License

* **[MIT license](https://github.com/edyspider//validate-NISS/blob/master/LICENSE)**
* Copyright 2024 &copy; [EdySpider](https://github.com/edyspider/)
