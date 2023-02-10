/// <reference types="./ReadonlyArray.d.ts" />
import { identity } from '../functions.mjs';
import AsyncEnumerable_toReadonlyArray from '../ix/__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable_toReadonlyArray from '../ix/__internal__/Enumerable/Enumerable.toReadonlyArray.mjs';
import RunnableObservable_toReadonlyArray from '../rx/__internal__/RunnableObservable/RunnableObservable.toReadonlyArray.mjs';
import ReadonlyArray_empty from './__internal__/ReadonlyArray/ReadonlyArray.empty.mjs';
import ReadonlyArray_every from './__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from './__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray_keep from './__internal__/ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray_map from './__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import ReadonlyArray_some from './__internal__/ReadonlyArray/ReadonlyArray.some.mjs';
import ReadonlyArray_toEnumerable from './__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import ReadonlyArray_toRunnable from './__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import ReadonlyArray_toRunnableObservable from './__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import ReadonlyArray_toSequence from './__internal__/ReadonlyArray/ReadonlyArray.toSequence.mjs';
import Sequence_toReadonlyArray from './__internal__/Sequence/Sequence.toReadonlyArray.mjs';

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
