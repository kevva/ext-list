import test from 'ava';
import m from '.';

test(t => {
	t.is(m().get('png'), 'image/png');
	t.is(m().get('tar'), 'application/x-tar');
});
