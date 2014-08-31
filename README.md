# ext-list [![Build Status](https://travis-ci.org/kevva/ext-list.svg?branch=master)](https://travis-ci.org/kevva/ext-list)

> Return a list of known [file extensions](http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types) and their MIME types

## Install

```sh
$ npm install --save ext-list
```

## Usage

```js
var extList = require('ext-list');

extList(function (err, obj) {
    if (err) {
        throw err;
    }

    console.log(obj);
    //=> { '123': 'application/vnd.lotus-1-2-3', ez: 'application/andrew-inset', aw: 'application/applixware', ... }
})
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
