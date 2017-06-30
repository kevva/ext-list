'use strict';
const mimeDb = require('mime-db');

module.exports = () => {
	const ret = new Map();

	for (const x of Object.keys(mimeDb)) {
		const val = mimeDb[x];

		if (val.extensions && val.extensions.length > 0) {
			for (const y of val.extensions) {
				ret.set(y, x);
			}
		}
	}

	return ret;
};
