/// <reference types="./IterableLike.d.ts" />
import { identity } from '../functions.mjs';
import IterableLike__toAsyncEnumerable from './__internal__/IterableLike/IterableLike.toAsyncEnumerable.mjs';
import IterableLike__toEnumerable from './__internal__/IterableLike/IterableLike.toEnumerable.mjs';
import IterableLike__toEnumerableObservable from './__internal__/IterableLike/IterableLike.toEnumerableObservable.mjs';
import IterableLike__toRunnableObservable from './__internal__/IterableLike/IterableLike.toRunnableObservable.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const toAsyncEnumerable = IterableLike__toAsyncEnumerable;
const toEnumerable = IterableLike__toEnumerable;
const toIterable = () => identity;
const toEnumerableObservable = IterableLike__toEnumerableObservable;
const toObservable = IterableLike__toRunnableObservable;
const toRunnableObservable = IterableLike__toRunnableObservable;

export { toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
