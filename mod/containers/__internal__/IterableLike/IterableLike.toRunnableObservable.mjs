/// <reference types="./IterableLike.toRunnableObservable.d.ts" />
import { compose } from '../../../functions.mjs';
import EnumerableLike__toRunnableObservable from '../../../ix/__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import IterableLike__toEnumerable from './IterableLike.toEnumerable.mjs';

const IterableLike__toRunnableObservable = options => compose(IterableLike__toEnumerable(), EnumerableLike__toRunnableObservable(options));

export { IterableLike__toRunnableObservable as default };
