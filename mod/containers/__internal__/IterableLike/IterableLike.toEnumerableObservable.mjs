/// <reference types="./IterableLike.toEnumerableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import EnumerableLike__toEnumerableObservable from '../../../ix/__internal__/EnumerableLike/EnumerableLike.toEnumerableObservable.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toEnumerableObservable = _ => compose(IterableLike__toEnumerable(), EnumerableLike__toEnumerableObservable());

export { IterableLike__toEnumerableObservable as default };
