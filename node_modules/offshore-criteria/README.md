Offshore-Criteria
=======================

Helper module designed for adapters which communicate with key/value stores such as [Sails-Disk](https://github.com/balderdashy/sails-disk), [Sails-Memory](https://github.com/balderdashy/sails-memory), and [sails-redis](https://github.com/balderdashy/sails-redis) (i.e. they already implement the `semantic` interface, but need to implement the `queryable` interface)


========================================

### Contents

|    | Jump to...        |
|-----|-------------------------|
| I   | [Browser](https://github.com/Atlantis-Software/offshore-criteria#for-the-browser)                 |
| II  | [Node.js](https://github.com/Atlantis-Software/offshore-criteria#for-nodejs)                 |
| III | [Version Notes](https://github.com/Atlantis-Software/offshore-criteria#version)          |
| IV  | [License](https://github.com/Atlantis-Software/offshore-criteria#license)                 |

========================================

### For the Browser

#### Installation
```
$ bower install offshore-criteria
```

#### Basic Usage

```html
    <!-- .... -->
  </body>
  <script type="text/javascript" src="./path/to/bower_components/offshore-criteria/index.js"></script>
  <script type="text/javascript">
    var someData = [{
      id: 1,
      name: 'Lyra'
    }, {
      id: 2,
      name: 'larry'
    }];
    
    var x = wlFilter(someData, {
      where: {
        name: { contains: 'lyr' }
      }
    }).results;
    
    // x ==> [{name: 'Lyra', id: 1}]
  </script>
</html>
```
========================================

### For Node.js

#### Installation

```sh
$ npm install offshore-criteria
```

#### Basic Usage

```js
var wlFilter = require('offshore-criteria');

var someData = [{
  id: 1,
  name: 'Lyra'
}, {
  id: 2,
  name 'larry'
}];

var x = wlFilter(someData, {
  where: {
    name: { contains: 'lyr' }
  }
}).results;

// x ==> [{name: 'Lyra', id: 1}]
```

========================================

### Version Notes

The master branch of this repository holds offshore-criteria for Offshore versions 0.0.1 and up.


========================================

### License

**[MIT](./LICENSE)**
&copy; 2014
[Mike McNeil](http://michaelmcneil.com), [Balderdash](http://balderdash.co) & contributors
&copy; 2015
[Atlantis Software](http://atlantis-software.net)

This module is part of the Offshore ORM, and is free and open-source under the [MIT License](https://opensource.org/licenses/MIT).

