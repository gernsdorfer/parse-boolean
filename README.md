[![Coverage Status](https://coveralls.io/repos/github/gernsdorfer/parse-boolean/badge.svg?branch=master)](https://coveralls.io/github/gernsdorfer/parse-boolean?branch=master)


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
