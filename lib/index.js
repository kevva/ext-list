'use strict';

var fs = require('fs');
var got = require('got');
var path = require('path');
var url = 'http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types';

got(url, function (err, res) {
    if (err) {
        throw err;
    }

    var obj = {};

    res = res.split(/[\r\n]+/);
    res.forEach(function (r) {
        r = r.replace(/\s*#.*|^\s*|\s*$/g, '').split(/\s+/);
        obj[r.shift()] = r;
    });

    Object.keys(obj).forEach(function (type) {
        var extensions = obj[type];

        extensions.forEach(function (ext, i) {
            obj[extensions[i]] = type;
        });

        delete obj[type];
    });

    fs.writeFileSync(path.join(__dirname, '../ext-list.json'), JSON.stringify(obj));
});
