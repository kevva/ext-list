import test from 'ava';
import m from './';

test(t => {
	t.is(m().png, 'image/png');
	t.is(m().tar, 'application/x-tar');
});
