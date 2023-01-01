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
const toAsyncEnumerableT = {
    toAsyncEnumerable,
};
const toEnumerable = IterableLike__toEnumerable;
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};
const toEnumerableObservable = IterableLike__toEnumerableObservable;
const toEnumerableObservableT = {
    toEnumerableObservable,
};
const toObservable = IterableLike__toRunnableObservable;
const toObservableT = { toObservable };
const toRunnableObservable = IterableLike__toRunnableObservable;
const toRunnableObservableT = { toRunnableObservable };

export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toRunnableObservable, toRunnableObservableT };
