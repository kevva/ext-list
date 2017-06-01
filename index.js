'use strict';
const mimeDb = require('mime-db');

module.exports = () => {
	const ret = {};

	for (const x of Object.keys(mimeDb)) {
		const val = mimeDb[x];

		if (val.extensions && val.extensions.length > 0) {
			for (const y of val.extensions) {
				ret[y] = x;
			}
		}
	}

	return ret;
};
