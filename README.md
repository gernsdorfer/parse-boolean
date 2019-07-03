[![Coverage Status](https://coveralls.io/repos/github/gernsdorfer/parse-boolean/badge.svg?branch=master)](https://coveralls.io/github/gernsdorfer/parse-boolean?branch=master)

[![Build Status](https://travis-ci.org/gernsdorfer/parse-boolean.svg?branch=master)](https://travis-ci.org/gernsdorfer/parse-boolean)


# parser-boolean

javascript boolean parser  


## Install

```sh
npm install parser-boolean --save
yarn add parser-boolean
```

## Usage
```javascript 
parseBoolean(string, defaultValue)

parseBoolean('true', 'defaultValue');  //-> true
parseBoolean(' TRUE ', 'defaultValue');  //-> true
parseBoolean('false', 'defaultValue');  //-> false
 
parseBoolean('1', 'defaultValue');  //-> null
parseBoolean('', 'defaultValue');  //-> 'defaultValue'
```

### Javascript
```javascript
var parseBoolean = require('parser-boolean');
parseBoolean('true','defaultValue');
```
```sh
Output should be 'Boys'
```

### TypeScript
```typescript
import { parseBoolean } from 'parser-boolean';
console.log(parseBoolean('true','defaultValue'))
```
```sh
Output should be 'Geese'
```

### AMD
```javascript
define(function(require,exports,module){
  var parseBoolean = require('parser-boolean');
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
