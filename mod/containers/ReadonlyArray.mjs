/// <reference types="./ReadonlyArray.d.ts" />
import { identity } from '../functions.mjs';
import AsyncEnumerable_toReadonlyArray from '../ix/AsyncEnumerable/__internal__/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable_toReadonlyArray from '../ix/Enumerable/__internal__/Enumerable.toReadonlyArray.mjs';
import RunnableObservable_toReadonlyArray from '../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.mjs';
import ReadonlyArray_empty from './ReadonlyArray/__internal__/ReadonlyArray.empty.mjs';
import ReadonlyArray_every from './ReadonlyArray/__internal__/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from './ReadonlyArray/__internal__/ReadonlyArray.forEach.mjs';
import ReadonlyArray_keep from './ReadonlyArray/__internal__/ReadonlyArray.keep.mjs';
import ReadonlyArray_map from './ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import ReadonlyArray_some from './ReadonlyArray/__internal__/ReadonlyArray.some.mjs';
import ReadonlyArray_toEnumerable from './ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.mjs';
import ReadonlyArray_toRunnable from './ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import ReadonlyArray_toRunnableObservable from './ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import ReadonlyArray_toSequence from './ReadonlyArray/__internal__/ReadonlyArray.toSequence.mjs';
import Sequence_toReadonlyArray from './Sequence/__internal__/Sequence.toReadonlyArray.mjs';

const empty = ReadonlyArray_empty;
const every = ReadonlyArray_every;
const forEach = ReadonlyArray_forEach;
const fromArray = 
// FIXME: Handle options
_options => identity;
const fromAsyncEnumerable = AsyncEnumerable_toReadonlyArray;
const fromEnumerable = Enumerable_toReadonlyArray;
const fromEnumerableObservable = RunnableObservable_toReadonlyArray;
const fromSequence = Sequence_toReadonlyArray;
const keep = ReadonlyArray_keep;
const map = ReadonlyArray_map;
const some = ReadonlyArray_some;
const toEnumerable = ReadonlyArray_toEnumerable;
const toEnumerableObservable = ReadonlyArray_toRunnableObservable;
const toObservable = ReadonlyArray_toRunnableObservable;
const toReadonlyArray = () => identity;
const toRunnable = ReadonlyArray_toRunnable;
const toRunnableObservable = ReadonlyArray_toRunnableObservable;
const toSequence = ReadonlyArray_toSequence;
/** @ignore */
const ReadonlyArray = {
    empty,
    every,
    forEach,
    fromArray,
    fromAsyncEnumerable,
    fromEnumerable,
    fromEnumerableObservable,
    fromSequence,
    keep,
    map,
    some,
    toEnumerable,
    toEnumerableObservable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    toRunnableObservable,
    toSequence,
};

export { ReadonlyArray as default, empty, every, forEach, fromArray, fromAsyncEnumerable, fromEnumerable, fromEnumerableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
