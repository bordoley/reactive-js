/// <reference types="./Enumerable.d.ts" />
import Iterable_toEnumerable from '../containers/__internal__/Iterable/Iterable.toEnumerable.mjs';
import { identity } from '../functions.mjs';
import Enumerable_buffer from './__internal__/Enumerable/Enumerable.buffer.mjs';
import Enumerable_concat from './__internal__/Enumerable/Enumerable.concat.mjs';
import Enumerable_concatAll from './__internal__/Enumerable/Enumerable.concatAll.mjs';
import Enumerable_distinctUntilChanged from './__internal__/Enumerable/Enumerable.distinctUntilChanged.mjs';
import Enumerable_empty from './__internal__/Enumerable/Enumerable.empty.mjs';
import Enumerable_enumerate from './__internal__/Enumerable/Enumerable.enumerate.mjs';
import Enumerable_forEach from './__internal__/Enumerable/Enumerable.forEach.mjs';
import Enumerable_fromArray from './__internal__/Enumerable/Enumerable.fromArray.mjs';
import Enumerable_generate from './__internal__/Enumerable/Enumerable.generate.mjs';
import Enumerable_keep from './__internal__/Enumerable/Enumerable.keep.mjs';
import Enumerable_map from './__internal__/Enumerable/Enumerable.map.mjs';
import Enumerable_pairwise from './__internal__/Enumerable/Enumerable.pairwise.mjs';
import Enumerable_repeat from './__internal__/Enumerable/Enumerable.repeat.mjs';
import Enumerable_scan from './__internal__/Enumerable/Enumerable.scan.mjs';
import Enumerable_skipFirst from './__internal__/Enumerable/Enumerable.skipFirst.mjs';
import Enumerable_takeFirst from './__internal__/Enumerable/Enumerable.takeFirst.mjs';
import Enumerable_takeLast from './__internal__/Enumerable/Enumerable.takeLast.mjs';
import Enumerable_takeWhile from './__internal__/Enumerable/Enumerable.takeWhile.mjs';
import Enumerable_throwIfEmpty from './__internal__/Enumerable/Enumerable.throwIfEmpty.mjs';
import Enumerable_toEnumerableObservable from './__internal__/Enumerable/Enumerable.toEnumerableObservable.mjs';
import Enumerable_toIterable from './__internal__/Enumerable/Enumerable.toIterable.mjs';
import Enumerable_toReadonlyArray from './__internal__/Enumerable/Enumerable.toReadonlyArray.mjs';
import Enumerable_toRunnable from './__internal__/Enumerable/Enumerable.toRunnable.mjs';
import Enumerable_toRunnableObservable from './__internal__/Enumerable/Enumerable.toRunnableObservable.mjs';
import Enumerable_zip from './__internal__/Enumerable/Enumerable.zip.mjs';

const enumerate = Enumerable_enumerate;
const buffer = Enumerable_buffer;
const concat = Enumerable_concat;
const concatAll = Enumerable_concatAll;
const distinctUntilChanged = Enumerable_distinctUntilChanged;
const empty = Enumerable_empty;
const forEach = Enumerable_forEach;
const fromArray = Enumerable_fromArray;
const fromIterable = Iterable_toEnumerable;
const generate = Enumerable_generate;
const keep = Enumerable_keep;
const map = Enumerable_map;
const pairwise = Enumerable_pairwise;
const repeat = Enumerable_repeat;
const scan = Enumerable_scan;
const skipFirst = Enumerable_skipFirst;
const takeFirst = Enumerable_takeFirst;
const takeLast = Enumerable_takeLast;
const takeWhile = Enumerable_takeWhile;
const throwIfEmpty = Enumerable_throwIfEmpty;
const toEnumerable = () => identity;
const toEnumerableObservable = Enumerable_toEnumerableObservable;
const toIterable = Enumerable_toIterable;
const toObservable = Enumerable_toRunnableObservable;
const toReadonlyArray = Enumerable_toReadonlyArray;
const toRunnable = Enumerable_toRunnable;
const toRunnableObservable = Enumerable_toRunnableObservable;
const zip = Enumerable_zip;
/** @ignore */
const Enumerable = {
    buffer,
    concat,
    concatAll,
    distinctUntilChanged,
    empty,
    forEach,
    fromArray,
    fromIterable,
    generate,
    keep,
    map,
    pairwise,
    repeat,
    scan,
    skipFirst,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    toEnumerable,
    toReadonlyArray,
    toRunnable,
    zip,
};

export { buffer, concat, concatAll, Enumerable as default, distinctUntilChanged, empty, enumerate, forEach, fromArray, fromIterable, generate, keep, map, pairwise, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toEnumerableObservable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
