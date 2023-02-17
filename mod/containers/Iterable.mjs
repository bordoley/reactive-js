/// <reference types="./Iterable.d.ts" />
import { returns, identity } from '../functions.mjs';
import Enumerable_toIterable from '../ix/Enumerable/__internal__/Enumerable.toIterable.mjs';
import EnumerableObservable_toIterable from '../rx/EnumerableObservable/__internal__/EnumerableObservable.toIterable.mjs';
import Iterable_toAsyncEnumerable from './Iterable/__internal__/Iterable.toAsyncEnumerable.mjs';
import Iterable_toEnumerable from './Iterable/__internal__/Iterable.toEnumerable.mjs';
import Iterable_toEnumerableObservable from './Iterable/__internal__/Iterable.toEnumerableObservable.mjs';
import Iterable_toFlowable from './Iterable/__internal__/Iterable.toFlowable.mjs';
import Iterable_toReadonlyArray from './Iterable/__internal__/Iterable.toReadonlyArray.mjs';
import Iterable_toRunnable from './Iterable/__internal__/Iterable.toRunnable.mjs';
import Iterable_toRunnableObservable from './Iterable/__internal__/Iterable.toRunnableObservable.mjs';
import ReadonlyArray_toReadonlyArray from './ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.mjs';
import Sequence_toIterable from './Sequence/__internal__/Sequence.toIterable.mjs';

const fromEnumerable = Enumerable_toIterable;
const fromEnumerableObservable = EnumerableObservable_toIterable;
const fromReadonlyArray = ReadonlyArray_toReadonlyArray;
const fromSequence = Sequence_toIterable;
const toAsyncEnumerable = Iterable_toAsyncEnumerable;
const toEnumerable = Iterable_toEnumerable;
const toIterable = 
/*@__PURE__*/ returns(identity);
const toEnumerableObservable = Iterable_toEnumerableObservable;
const toFlowable = Iterable_toFlowable;
const toObservable = Iterable_toRunnableObservable;
const toReadonlyArray = Iterable_toReadonlyArray;
const toRunnable = Iterable_toRunnable;
const toRunnableObservable = Iterable_toRunnableObservable;
/** @ignore */
const Iterable = {
    fromEnumerable,
    fromEnumerableObservable,
    fromReadonlyArray,
    fromSequence,
    toAsyncEnumerable,
    toEnumerable,
    toEnumerableObservable,
    toFlowable,
    toIterable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    toRunnableObservable,
};

export { Iterable as default, fromEnumerable, fromEnumerableObservable, fromReadonlyArray, fromSequence, toAsyncEnumerable, toEnumerable, toEnumerableObservable, toFlowable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable };
