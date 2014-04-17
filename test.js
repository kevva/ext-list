/*global describe, it */
'use strict';

var assert = require('assert');
var extList = require('./');

describe('viewport()', function () {
    it('should return a list of known file types', function (cb) {
        assert(Object.keys(extList).length > 0);
        cb();
    });
});
