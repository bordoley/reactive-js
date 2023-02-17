/// <reference types="./Iterable.d.ts" />
import { returns, identity } from '../functions.mjs';
import Enumerable_toIterable from '../ix/Enumerable/__internal__/Enumerable.toIterable.mjs';
import Iterable_toAsyncEnumerable from './Iterable/__internal__/Iterable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './Iterable/__internal__/Iterable.toEnumerable.mjs';
import Iterable_toEnumerableObservable from './Iterable/__internal__/Iterable.toEnumerableObservable.mjs';
import Iterable_toRunnableObservable from './Iterable/__internal__/Iterable.toRunnableObservable.mjs';
import ReadonlyArray_toReadonlyArray from './ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.mjs';

const fromReadonlyArray = ReadonlyArray_toReadonlyArray;
const fromEnumerable = Enumerable_toIterable;
const toAsyncEnumerable = Iterable_toAsyncEnumerable;
const toEnumerable = Iterable_toEnumerable;
const toIterable = 
/*@__PURE__*/ returns(identity);
const toEnumerableObservable = Iterable_toEnumerableObservable;
const toObservable = Iterable_toRunnableObservable;
const toRunnableObservable = Iterable_toRunnableObservable;
/** @ignore */
const Iterable = {
    fromEnumerable,
    fromReadonlyArray,
    toAsyncEnumerable,
    toEnumerable,
    toIterable,
    toEnumerableObservable,
    toObservable,
    toRunnableObservable,
};

export { Iterable as default, fromEnumerable, fromReadonlyArray, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toIterable, toObservable, toRunnableObservable };
