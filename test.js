'use strict';

var extList = require('./');
var test = require('ava');

test('return a list of known file types', function (t) {
	t.assert(Object.keys(extList()).length > 50);
	t.end();
});

test('return the path to the JSON file', function (t) {
	t.assert(extList.path === __dirname + '/ext-list.json');
	t.end();
});
