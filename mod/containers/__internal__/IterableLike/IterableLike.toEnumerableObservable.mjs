/// <reference types="./IterableLike.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toEnumerableObservable as toEnumerableObservable$1 } from '../../../ix/EnumerableLike.mjs';
import toEnumerable from './IterableLike.toEnumerable.mjs';

const toEnumerableObservable = _ => compose(toEnumerable(), toEnumerableObservable$1());

export { toEnumerableObservable as default };
