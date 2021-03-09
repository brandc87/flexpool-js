# flexpool-js

 [![Node.js CI](https://github.com/brandc87/flexpool-js/actions/workflows/node.js.yml/badge.svg)](https://github.com/brandc87/flexpool-js/actions/workflows/node.js.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/brandc87/flexpool-js/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

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
