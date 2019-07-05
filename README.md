[![Coverage Status](https://coveralls.io/repos/github/gernsdorfer/parse-boolean/badge.svg?branch=master)](https://coveralls.io/github/gernsdorfer/parse-boolean?branch=master)

[![Build Status](https://travis-ci.org/gernsdorfer/parse-boolean.svg?branch=master)](https://travis-ci.org/gernsdorfer/parse-boolean)


## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome |
| --------- | --------- | --------- |
| IE11, Edge| last 10 versions| last 10 versions

# parser-boolean

javascript boolean parser, compatible with ie 11


## Install

```sh
npm install parser-boolean --save
yarn add parser-boolean
```

## Usage
```javascript 
parseBoolean([string], [defaultValue])

parseBoolean('true', 'defaultValue');  //-> true
parseBoolean(' TRUE ', 'defaultValue');  //-> true
parseBoolean('false', 'defaultValue');  //-> false
parseBoolean('1', 'defaultValue');  //-> true

parseBoolean('', 'defaultValue');  //-> 'defaultValue'
```

### Javascript
```javascript
var parseBoolean = require('parser-boolean');
console.log(parseBoolean('true', 'defaultValue')); //-> true
```

### TypeScript
```typescript
import { parseBoolean } from 'parser-boolean';
console.log(parseBoolean('true', 'defaultValue')); //-> true
```

### AMD
```javascript
define(function (require, exports, module) {
    var parseBoolean = require('parser-boolean');
    console.log(parseBoolean('true', 'defaultValue')); //-> true
});
```

## Test 
```sh
npm run test
```

## Linter 
```sh
npm run lint
```


## License

The MIT License (MIT)
Copyright (c) 2014-2019 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
