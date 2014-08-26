'use strict';

var extList = require('./');
var test = require('ava');

test('return a list of known file types', function (t) {
    t.plan(2);

    extList(function (err, obj) {
        t.assert(!err);
        t.assert(Object.keys(obj).length > 50);
    });
});
