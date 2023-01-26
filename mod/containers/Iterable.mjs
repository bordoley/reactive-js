/// <reference types="./Iterable.d.ts" />
import { identity } from '../functions.mjs';
import Iterable$toAsyncEnumerable from './__internal__/Iterable/Iterable.toAsyncEnumerable.mjs';
import Iterable$toEnumerable from './__internal__/Iterable/Iterable.toEnumerable.mjs';
import Iterable$toEnumerableObservable from './__internal__/Iterable/Iterable.toEnumerableObservable.mjs';
import Iterable$toRunnableObservable from './__internal__/Iterable/Iterable.toRunnableObservable.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const toAsyncEnumerable = Iterable$toAsyncEnumerable;
const toEnumerable = Iterable$toEnumerable;
const toIterable = () => identity;
const toEnumerableObservable = Iterable$toEnumerableObservable;
const toObservable = Iterable$toRunnableObservable;
const toRunnableObservable = Iterable$toRunnableObservable;

export { toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
