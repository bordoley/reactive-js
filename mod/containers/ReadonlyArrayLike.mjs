/// <reference types="./ReadonlyArrayLike.d.ts" />
import { identity } from '../functions.mjs';
import AsyncEnumerableLike__toReadonlyArray from '../ix/__internal__/AsyncEnumerableLike/AsyncEnumerableLike.toReadonlyArray.mjs';
import EnumerableLike__toReadonlyArray from '../ix/__internal__/EnumerableLike/EnumerableLike.toReadonlyArray.mjs';
import ObservableLike__toReadonlyArray from '../rx/__internal__/ObservableLike/ObservableLike.toReadonlyArray.mjs';
import ReadonlyArrayLike__empty from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.empty.mjs';
import ReadonlyArrayLike__every from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__forEach from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import ReadonlyArrayLike__keep from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keep.mjs';
import ReadonlyArrayLike__map from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import ReadonlyArrayLike__some from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some.mjs';
import ReadonlyArrayLike__toEnumerable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable.mjs';
import ReadonlyArrayLike__toRunnable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import ReadonlyArrayLike__toRunnableObservable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import ReadonlyArrayLike__toSequence from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toSequence.mjs';
import SequenceLike__toReadonlyArray from './__internal__/SequenceLike/SequenceLike.toReadonlyArray.mjs';

const empty = ReadonlyArrayLike__empty;
const every = ReadonlyArrayLike__every;
const forEach = ReadonlyArrayLike__forEach;
const fromArray = 
// FIXME: Handle options
_options => identity;
const fromAsyncEnumerable = AsyncEnumerableLike__toReadonlyArray;
const fromEnumerable = EnumerableLike__toReadonlyArray;
const fromEnumerableObservable = ObservableLike__toReadonlyArray;
const fromSequence = SequenceLike__toReadonlyArray;
const keep = ReadonlyArrayLike__keep;
const map = ReadonlyArrayLike__map;
const some = ReadonlyArrayLike__some;
const toEnumerable = ReadonlyArrayLike__toEnumerable;
const toEnumerableObservable = ReadonlyArrayLike__toRunnableObservable;
const toObservable = ReadonlyArrayLike__toRunnableObservable;
const toReadonlyArray = () => identity;
const toRunnable = ReadonlyArrayLike__toRunnable;
const toRunnableObservable = ReadonlyArrayLike__toRunnableObservable;
const toSequence = ReadonlyArrayLike__toSequence;

export { empty, every, forEach, fromArray, fromAsyncEnumerable, fromEnumerable, fromEnumerableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
