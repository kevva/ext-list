'use strict';
const fs = require('fs');
const path = require('path');
const got = require('got');

got('http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types').then(res => {
	let body = res.body;

	body = body.split(/[\r\n]+/).reduce((a, b) => {
		b = b.replace(/\s*#.*|^\s*|\s*$/g, '').split(/\s+/);
		a[b.shift()] = b;

		return a;
	}, {});

	for (const x of Object.keys(body)) {
		const exts = body[x];

		for (const y of exts.entries()) {
			const i = y[0];
			body[exts[i]] = x;
		}

		delete body[x];
	}

	fs.writeFileSync(path.join(__dirname, 'ext-list.json'), JSON.stringify(body, null, 2));
});
