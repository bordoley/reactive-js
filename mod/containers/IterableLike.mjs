/// <reference types="./IterableLike.d.ts" />
import { identity } from '../functions.mjs';
import toAsyncEnumerable$1 from './__internal__/IterableLike/IterableLike.toAsyncEnumerable.mjs';
import toEnumerable$1 from './__internal__/IterableLike/IterableLike.toEnumerable.mjs';
import toEnumerableObservable$1 from './__internal__/IterableLike/IterableLike.toEnumerableObservable.mjs';
import toRunnableObservable$1 from './__internal__/IterableLike/IterableLike.toRunnableObservable.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const toAsyncEnumerable = toAsyncEnumerable$1;
const toAsyncEnumerableT = {
    toAsyncEnumerable,
};
const toEnumerable = toEnumerable$1;
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};
const toEnumerableObservable = toEnumerableObservable$1;
const toEnumerableObservableT = {
    toEnumerableObservable,
};
const toObservable = toRunnableObservable$1;
const toObservableT = { toObservable };
const toRunnableObservable = toRunnableObservable$1;
const toRunnableObservableT = { toRunnableObservable };

export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toRunnableObservable, toRunnableObservableT };
