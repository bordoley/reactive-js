/// <reference types="./Iterable.d.ts" />
import { identity } from '../functions.mjs';
import Iterable_toAsyncEnumerable from './Iterable/__internal__/Iterable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './Iterable/__internal__/Iterable.toEnumerable.mjs';
import Iterable_toEnumerableObservable from './Iterable/__internal__/Iterable.toEnumerableObservable.mjs';
import Iterable_toRunnableObservable from './Iterable/__internal__/Iterable.toRunnableObservable.mjs';

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
/** @ignore */
const Iterable = {
    toAsyncEnumerable,
    toEnumerable,
    toIterable,
    toEnumerableObservable,
    toObservable,
    toRunnableObservable,
};

export { Iterable as default, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
