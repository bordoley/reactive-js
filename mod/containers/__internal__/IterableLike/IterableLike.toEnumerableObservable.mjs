/// <reference types="./IterableLike.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import { toEnumerableObservable } from '../../../ix/EnumerableLike.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toEnumerableObservable = _ => compose(IterableLike__toEnumerable(), toEnumerableObservable());

export { IterableLike__toEnumerableObservable as default };
