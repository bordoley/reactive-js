/// <reference types="./Iterable.d.ts" />
import { identity } from '../functions.mjs';
import Iterable_toAsyncEnumerable from './__internal__/Iterable/Iterable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './__internal__/Iterable/Iterable.toEnumerable.mjs';
import Iterable_toEnumerableObservable from './__internal__/Iterable/Iterable.toEnumerableObservable.mjs';
import Iterable_toRunnableObservable from './__internal__/Iterable/Iterable.toRunnableObservable.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const toAsyncEnumerable = Iterable_toAsyncEnumerable;
const toEnumerable = Iterable_toEnumerable;
const toIterable = () => identity;
const toEnumerableObservable = Iterable_toEnumerableObservable;
const toObservable = Iterable_toRunnableObservable;
const toRunnableObservable = Iterable_toRunnableObservable;

export { toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
