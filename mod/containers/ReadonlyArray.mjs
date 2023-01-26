/// <reference types="./ReadonlyArray.d.ts" />
import { identity } from '../functions.mjs';
import AsyncEnumerable$toReadonlyArray from '../ix/__internal__/AsyncEnumerable/AsyncEnumerable.toReadonlyArray.mjs';
import Enumerable$toReadonlyArray from '../ix/__internal__/Enumerable/Enumerable.toReadonlyArray.mjs';
import Observable$toReadonlyArray from '../rx/__internal__/Observable/Observable.toReadonlyArray.mjs';
import ReadonlyArray$empty from './__internal__/ReadonlyArray/ReadonlyArray.empty.mjs';
import ReadonlyArray$every from './__internal__/ReadonlyArray/ReadonlyArray.every.mjs';
import ReadonlyArray$forEach from './__internal__/ReadonlyArray/ReadonlyArray.forEach.mjs';
import ReadonlyArray$keep from './__internal__/ReadonlyArray/ReadonlyArray.keep.mjs';
import ReadonlyArray$map from './__internal__/ReadonlyArray/ReadonlyArray.map.mjs';
import ReadonlyArray$some from './__internal__/ReadonlyArray/ReadonlyArray.some.mjs';
import ReadonlyArray$toEnumerable from './__internal__/ReadonlyArray/ReadonlyArray.toEnumerable.mjs';
import ReadonlyArray$toRunnable from './__internal__/ReadonlyArray/ReadonlyArray.toRunnable.mjs';
import ReadonlyArray$toRunnableObservable from './__internal__/ReadonlyArray/ReadonlyArray.toRunnableObservable.mjs';
import ReadonlyArray$toSequence from './__internal__/ReadonlyArray/ReadonlyArray.toSequence.mjs';
import Sequence$toReadonlyArray from './__internal__/Sequence/Sequence.toReadonlyArray.mjs';

const empty = ReadonlyArray$empty;
const every = ReadonlyArray$every;
const forEach = ReadonlyArray$forEach;
const fromArray = 
// FIXME: Handle options
_options => identity;
const fromAsyncEnumerable = AsyncEnumerable$toReadonlyArray;
const fromEnumerable = Enumerable$toReadonlyArray;
const fromEnumerableObservable = Observable$toReadonlyArray;
const fromSequence = Sequence$toReadonlyArray;
const keep = ReadonlyArray$keep;
const map = ReadonlyArray$map;
const some = ReadonlyArray$some;
const toEnumerable = ReadonlyArray$toEnumerable;
const toEnumerableObservable = ReadonlyArray$toRunnableObservable;
const toObservable = ReadonlyArray$toRunnableObservable;
const toReadonlyArray = () => identity;
const toRunnable = ReadonlyArray$toRunnable;
const toRunnableObservable = ReadonlyArray$toRunnableObservable;
const toSequence = ReadonlyArray$toSequence;

export { empty, every, forEach, fromArray, fromAsyncEnumerable, fromEnumerable, fromEnumerableObservable, fromSequence, keep, map, some, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, toSequence };
