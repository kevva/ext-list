'use strict';

var extList = require('./');
var test = require('ava');

test('return a list of known file types', function (t) {
	t.assert(Object.keys(extList()).length > 50);
	t.end();
});
