# Luhn Algorithm Plugin

[![npm version](https://badge.fury.io/js/@designbycode%2Fluhn-algorithm.svg)](https://badge.fury.io/js/@designbycode%2Fluhn-algorithm)
![npm](https://img.shields.io/npm/dt/%40designbycode/luhn-algorithm)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Fluhn-algorithm)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Fluhn-algorithm)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/luhn-algorithm?style=social)](https://github.com/DesignByCode/luhn-algorithm/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/luhn-algorithm.svg?style=flat)](http://hits.dwyl.com/designbycode/luhn-algorithm)

[![NPM](https://nodei.co/npm/@designbycode/luhn-algorithm.png)](https://nodei.co/npm/@designbycode/luhn-algorithm/)

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Usage](#usage)
* [Functions](#functions)
    * [isValid](#isvalid)
    * [generate](#generate)
    * [getDigit](#getdigit)
    * [withoutDigit](#withoutdigit)
    * [validateAndSuggest](#validateandsuggest)
* [License](#license)
* [Contributing](#contributing)
* [Acknowledgments](#acknowledgments)

The Luhn Algorithm plugin is a JavaScript library that provides a set of functions to validate and generate numbers using the Luhn algorithm, also known as the Modulus 10 or Mod 10 algorithm. This algorithm is widely used to validate
various identification numbers, such as credit card numbers, IMEI numbers, and others.

## Installation

To use this plugin, you need to install it via pnpm, npm or yarn.

#### Using pnpm

```bash
pnpm add  @designbycode/luhn-algorithm
```

#### Using npm

```bash
npm install @designbycode/luhn-algorithm
```

#### Using yarn

```bash
yarn add @designbycode/luhn-algorithm
```

## Usage

To use the Luhn Algorithm plugin, simply import the LuhnAlgorithm class and call the desired function.

```typescript
import LuhnAlgorithm from '@designbycode/luhn-algorithm';

const number = "4532015112830366";
const isValid = LuhnAlgorithm.isValid(number);
console.log(isValid); // true
```

## Functions

### isValid

`isValid(number: string): boolean`

The isValid function takes a string number as input and returns a boolean indicating whether the number is valid according to the Luhn algorithm.

```typescript
const number = "4532015112830366";
const isValid = LuhnAlgorithm.isValid(number);
console.log(isValid); // true
```

### generate

`generate(number: string): string`

The generate function takes a string number as input and returns a new string with a check digit appended to the end. The check digit is calculated using the Luhn algorithm.

```typescript
const number = "45320151128303";
const generatedNumber = LuhnAlgorithm.generate(number);
console.log(generatedNumber); // "4532015112830366"
```

### getDigit

`getDigit(number: string): string`
The getDigit function takes a string number as input and returns a string representing the check digit calculated using the Luhn algorithm.

```typescript
const number = "45320151128303";
const checkDigit = LuhnAlgorithm.getDigit(number);
console.log(checkDigit); // "6"
```

### withoutDigit

`withoutDigit(number: string): string`
The withoutDigit function takes a string number as input and returns a new string with the last digit removed.

```typescript
const number = "4532015112830366";
const withoutDigit = LuhnAlgorithm.withoutDigit(number);
console.log(withoutDigit); // "45320151128303"
```

### validateAndSuggest

`validateAndSuggest(number: string): { isValid: boolean; suggestedDigit: string }`
The validateAndSuggest function takes a string number as input and returns an object with two properties: isValid and suggestedDigit. The isValid property indicates whether the number is valid, according to the Luhn algorithm, and the
suggestedDigit property provides a suggested check digit if the number is invalid.

```typescript
const number = "45320151128303";
const result = LuhnAlgorithm.validateAndSuggest(number);
console.log(result); // { isValid: false, suggestedDigit: "6" }
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue in the GitHub repository.

## Acknowledgments

The Luhn Algorithm plugin is inspired by the work of Hans Peter Luhn, who developed the Luhn algorithm in the 1950s.