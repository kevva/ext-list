import test from 'ava';
import m from './';

test(t => {
	t.truthy(Object.keys(m()).length);
});
