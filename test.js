'use strict';

var test = require('ava');
var extList = require('./');

test('return a list of known file types', function (t) {
	t.assert(Object.keys(extList()).length > 50, Object.keys(extList()).length);
	t.end();
});
