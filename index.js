'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Export ext-list as an object
 *
 * @api public
 */

module.exports = function () {
	var json = fs.readFileSync(module.exports.path);
	return JSON.parse(json);
};

/**
 * Export the path to the JSON file
 *
 * @api public
 */

module.exports.path = path.join(__dirname, 'ext-list.json');
