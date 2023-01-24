/// <reference types="./ReadonlyArrayLike.d.ts" />
import { identity } from '../functions.mjs';
import ReadonlyArrayLike__empty from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.empty.mjs';
import ReadonlyArrayLike__every from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every.mjs';
import ReadonlyArrayLike__forEach from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach.mjs';
import ReadonlyArrayLike__keep from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keep.mjs';
import ReadonlyArrayLike__keepT from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keepT.mjs';
import ReadonlyArrayLike__map from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map.mjs';
import ReadonlyArrayLike__some from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some.mjs';
import ReadonlyArrayLike__toEnumerable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable.mjs';
import ReadonlyArrayLike__toRunnable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable.mjs';
import ReadonlyArrayLike__toRunnableObservable from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import ReadonlyArrayLike__toSequence from './__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toSequence.mjs';

const empty = ReadonlyArrayLike__empty;
const emptyT = {
    empty,
};
const every = ReadonlyArrayLike__every;
const forEach = ReadonlyArrayLike__forEach;
const forEachT = { forEach };
const fromArray = 
// FIXME: Handle options
_options => identity;
const keep = ReadonlyArrayLike__keep;
const keepT = ReadonlyArrayLike__keepT;
const map = ReadonlyArrayLike__map;
const mapT = { map };
const some = ReadonlyArrayLike__some;
const toEnumerable = ReadonlyArrayLike__toEnumerable;
const toEnumerableT = { toEnumerable };
const toEnumerableObservable = ReadonlyArrayLike__toRunnableObservable;
const toEnumerableObservableT = { toEnumerableObservable };
const toObservable = ReadonlyArrayLike__toRunnableObservable;
const toObservableT = { toObservable };
const toReadonlyArray = () => identity;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = ReadonlyArrayLike__toRunnable;
const toRunnableT = { toRunnable };
const toRunnableObservable = ReadonlyArrayLike__toRunnableObservable;
const toRunnableObservableT = { toRunnableObservable };
const toSequence = ReadonlyArrayLike__toSequence;
const toSequenceT = {
    toSequence,
};

export { empty, emptyT, every, forEach, forEachT, fromArray, keep, keepT, map, mapT, some, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, toSequence, toSequenceT };
