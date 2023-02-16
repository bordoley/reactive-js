/// <reference types="./ReadonlyArray.d.ts" />
import Enumerable_toReadonlyArray from '../ix/Enumerable/__internal__/Enumerable.toReadonlyArray.mjs';
import RunnableObservable_toReadonlyArray from '../rx/RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.mjs';
import ReadonlyArray_empty from './ReadonlyArray/__internal__/ReadonlyArray.empty.mjs';
import ReadonlyArray_every from './ReadonlyArray/__internal__/ReadonlyArray.every.mjs';
import ReadonlyArray_forEach from './ReadonlyArray/__internal__/ReadonlyArray.forEach.mjs';
import ReadonlyArray_keep from './ReadonlyArray/__internal__/ReadonlyArray.keep.mjs';
import ReadonlyArray_map from './ReadonlyArray/__internal__/ReadonlyArray.map.mjs';
import ReadonlyArray_some from './ReadonlyArray/__internal__/ReadonlyArray.some.mjs';
import ReadonlyArray_toEnumerable from './ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.mjs';
import ReadonlyArray_toReadonlyArray from './ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.mjs';
import ReadonlyArray_toRunnable from './ReadonlyArray/__internal__/ReadonlyArray.toRunnable.mjs';
import ReadonlyArray_toRunnableObservable from './ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import ReadonlyArray_toSequence from './ReadonlyArray/__internal__/ReadonlyArray.toSequence.mjs';
import Sequence_toReadonlyArray from './Sequence/__internal__/Sequence.toReadonlyArray.mjs';

const empty = ReadonlyArray_empty;
const every = ReadonlyArray_every;
const forEach = ReadonlyArray_forEach;
const fromEnumerable = Enumerable_toReadonlyArray;
const fromEnumerableObservable = RunnableObservable_toReadonlyArray;
const fromReadonlyArray = ReadonlyArray_toReadonlyArray;
const fromRunnableObservable = RunnableObservable_toReadonlyArray;
const fromSequence = Sequence_toReadonlyArray;
const keep = ReadonlyArray_keep;
const map = ReadonlyArray_map;
const some = ReadonlyArray_some;
const toEnumerable = ReadonlyArray_toEnumerable;
const toEnumerableObservable = ReadonlyArray_toRunnableObservable;
const toObservable = ReadonlyArray_toRunnableObservable;
const toReadonlyArray = ReadonlyArray_toReadonlyArray;
const toRunnable = ReadonlyArray_toRunnable;
const toRunnableObservable = ReadonlyArray_toRunnableObservable;
const toSequence = ReadonlyArray_toSequence;
/** @ignore */
const ReadonlyArray = {
    empty,
    every,
    forEach,
    fromEnumerable,
    fromEnumerableObservable,
    fromReadonlyArray,
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

export { ReadonlyArray as default, empty, every, forEach, fromEnumerable, fromEnumerableObservable, fromReadonlyArray, fromRunnableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
