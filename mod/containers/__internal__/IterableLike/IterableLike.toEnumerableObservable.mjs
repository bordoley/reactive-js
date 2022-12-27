/// <reference types="./IterableLike.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toObservable } from '../../../ix/EnumerableLike.mjs';
import toEnumerable from './IterableLike.toEnumerable.mjs';

const toEnumerableObservable = _ => compose(toEnumerable(), toObservable());

export { toEnumerableObservable as default };
