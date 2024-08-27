# map-some

A simple utility function to map an array and filter out null or undefined results in an efficient way.

## Installation

```bash
npm install map-some
```

## Usage
const { mapSome } = require('map-some-lib');

const data = [1, 2, 3, 4, 5];
const result = mapSome(data, x => (x % 2 === 0 ? x * 2 : null));

console.log(result); // [4, 8]

## Running tests
npm test
