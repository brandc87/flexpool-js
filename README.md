# Flexpool-js

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/brandc87/flexpool-js/blob/main/LICENSE)

> Flexpool API wrapper

A simple wrapper around the Flexpool API.

## Install
```sh
$ npm install flexpool-js
# OR
$ yarn add flexpool-js
```

## Usage
```js
const Flexpool = require('flexpool-js')
const client = Flexpool()

client.getPoolHashrate().then((data) => console.log(data));
```

Check out the [Flexpool API documentation](https://flexpool.io/en/docs/API/) for more information!
