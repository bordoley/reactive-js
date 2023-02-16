/// <reference types="./Enumerable.d.ts" />
import Iterable_toEnumerable from '../containers/Iterable/__internal__/Iterable.toEnumerable.mjs';
import { identity } from '../functions.mjs';
import Enumerable_buffer from './Enumerable/__internal__/Enumerable.buffer.mjs';
import Enumerable_concat from './Enumerable/__internal__/Enumerable.concat.mjs';
import Enumerable_concatAll from './Enumerable/__internal__/Enumerable.concatAll.mjs';
import Enumerable_distinctUntilChanged from './Enumerable/__internal__/Enumerable.distinctUntilChanged.mjs';
import Enumerable_empty from './Enumerable/__internal__/Enumerable.empty.mjs';
import Enumerable_enumerate from './Enumerable/__internal__/Enumerable.enumerate.mjs';
import Enumerable_forEach from './Enumerable/__internal__/Enumerable.forEach.mjs';
import Enumerable_fromReadonlyArray from './Enumerable/__internal__/Enumerable.fromReadonlyArray.mjs';
import Enumerable_generate from './Enumerable/__internal__/Enumerable.generate.mjs';
import Enumerable_keep from './Enumerable/__internal__/Enumerable.keep.mjs';
import Enumerable_map from './Enumerable/__internal__/Enumerable.map.mjs';
import Enumerable_pairwise from './Enumerable/__internal__/Enumerable.pairwise.mjs';
import Enumerable_repeat from './Enumerable/__internal__/Enumerable.repeat.mjs';
import Enumerable_scan from './Enumerable/__internal__/Enumerable.scan.mjs';
import Enumerable_skipFirst from './Enumerable/__internal__/Enumerable.skipFirst.mjs';
import Enumerable_takeFirst from './Enumerable/__internal__/Enumerable.takeFirst.mjs';
import Enumerable_takeLast from './Enumerable/__internal__/Enumerable.takeLast.mjs';
import Enumerable_takeWhile from './Enumerable/__internal__/Enumerable.takeWhile.mjs';
import Enumerable_throwIfEmpty from './Enumerable/__internal__/Enumerable.throwIfEmpty.mjs';
import Enumerable_toEnumerableObservable from './Enumerable/__internal__/Enumerable.toEnumerableObservable.mjs';
import Enumerable_toIterable from './Enumerable/__internal__/Enumerable.toIterable.mjs';
import Enumerable_toReadonlyArray from './Enumerable/__internal__/Enumerable.toReadonlyArray.mjs';
import Enumerable_toRunnable from './Enumerable/__internal__/Enumerable.toRunnable.mjs';
import Enumerable_toRunnableObservable from './Enumerable/__internal__/Enumerable.toRunnableObservable.mjs';
import Enumerable_zip from './Enumerable/__internal__/Enumerable.zip.mjs';

const enumerate = Enumerable_enumerate;
const buffer = Enumerable_buffer;
const concat = Enumerable_concat;
const concatAll = Enumerable_concatAll;
const distinctUntilChanged = Enumerable_distinctUntilChanged;
const empty = Enumerable_empty;
const forEach = Enumerable_forEach;
const fromReadonlyArray = Enumerable_fromReadonlyArray;
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
    fromReadonlyArray,
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
    toRunnableObservable,
    zip,
};

export { buffer, concat, concatAll, Enumerable as default, distinctUntilChanged, empty, enumerate, forEach, fromIterable, fromReadonlyArray, generate, keep, map, pairwise, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toEnumerableObservable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
