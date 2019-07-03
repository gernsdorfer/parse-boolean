# parse-boolean
parse boolean  


## Install

```sh
npm install parse-boolean --save
yarn add parse-boolean
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
var parseBoolean = require('parse-boolean');
parseBoolean('true','defaultValue');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { parseBoolean } from 'parse-boolean';
console.log(parseBoolean('true','defaultValue'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var parseBoolean = require('parse-boolean');
});
```
## Test 
```sh
npm run test
```
