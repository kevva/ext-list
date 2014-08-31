'use strict';

var got = require('got');

/**
 * List of known file extensions and their MIME types
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
    var obj = {};

    return got('http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types', function (err, res) {
        if (err) {
            cb(err);
            return;
        }

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

        cb(null, obj);
    });
};
