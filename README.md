# stack-size

[![CircleCI](https://circleci.com/gh/nivrith/stack-size/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/stack-size/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/stack-size.svg)](https://www.npmjs.com/package/stack-size)
[![node](https://img.shields.io/node/v/stack-size.svg)](https://www.npmjs.com/package/stack-size)
[![License MIT](https://img.shields.io/github/license/nivrith/stack-size.svg)](https://github.com/nivrith/stack-size/blob/master/LICENSE)

Get Maximum Call Stack Size

## Highlights

- Super Fast

- Written in Typescript

- Async and Sync methods

- Returns Promise

## Usage

> Get Maximum Call Stack Size that causes stack overflow

```js

// async

const { stackSize } = require('stack-size');

stackSize();
.then((result) => {
  console.log(result); //15339
});


// sync
const { stackSizeSync }  = require('stack-size');

let result = stackSizeSync();
console.log(result) // 15339

```

## License

MIT © [Nivrith Mandayam Gomatam](https://au.linkedin.com/in/nivrith-gomatam-43bb7aa5)
