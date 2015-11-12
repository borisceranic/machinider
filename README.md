# machinider: Generate machine identifier

[![Build Status](https://travis-ci.org/borisceranic/machinider.svg?branch=master)](https://travis-ci.org/borisceranic/machinider)

This is a very simple module that generates machine identifier.

It is a thin wrapper around [fingerprintjs](https://www.npmjs.com/package/fingerprintjs).

## Usage

Install via npm:

```bash
npm install machinider
```

In your code:

```js
var machineId = require('machinider');

// Retrieve machine id
var id = machineId();
```

## API

### machineId()

Returns a machine id number.

## License

[BSD 3-Clause License](https://tldrlegal.com/l/bsd3)

Copyright (c) 2015, [Boris Ćeranić](https://sosko.in.rs)
