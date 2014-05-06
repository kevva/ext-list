/*global describe, it */
'use strict';

var assert = require('assert');
var extList = require('./');

describe('extList()', function () {
    it('should return a list of known file types', function (cb) {
        extList(function (err, obj) {
            assert(!err);
            assert(Object.keys(obj).length > 50);
            cb();
        });
    });
});
