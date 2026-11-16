# Change Log

All notable changes to the **@edyspider/validate-niss** npm package
will be documented in this file.

## [2.0.0]

### Breaking changes

- Requires Node.js 22.12 or later
- Only NISS numbers starting with `1` (singular person) or `2` (collective person) are valid. Numbers starting with `3` to `9` were accepted before
- The package now uses the `exports` field, so deep imports such as `@edyspider/validate-niss/src/index.js` no longer work

### Changes

- Native ES module with a CommonJS entry point, so both `import` and `require()` work
- TypeScript types are now included in the published package, for both `import` and `require()`
- `validateNISS()` accepts any value (`unknown`) and returns `false` for anything that is not a valid NISS string
- `randomNISS()` is published to npm for the first time
- No runtime dependencies; webpack and jest were removed
- Only the source, README, CHANGELOG and LICENSE are published to npm
- Tests use the Node.js built-in test runner
- CI runs on Node.js 22 and 24, and releases are published from GitHub Actions with npm provenance

### Fixes

- `require('@edyspider/validate-niss')` failed with `MODULE_NOT_FOUND` in 1.0.2, because `main` pointed to a file that did not exist
- `validateNISS()` created global variables (`factor`, `calc`, `i`)
- The license in `package.json` now matches the LICENSE file (MIT)

---

## [1.0.5]

### Changes

- Add `randomNISS()` to generate random valid NISS numbers (not published to npm)

---

## [1.0.0]

### Changes

- First release with `validateNISS()`
