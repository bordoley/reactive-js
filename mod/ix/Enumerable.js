/// <reference types="./Enumerable.d.ts" />

import Iterable_toEnumerable from "../containers/Iterable/__internal__/Iterable.toEnumerable.js";
import ReadonlyArray_toEnumerable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toEnumerable.js";
import { identity, returns } from "../functions.js";
import Enumerable_buffer from "./Enumerable/__internal__/Enumerable.buffer.js";
import Enumerable_compute from "./Enumerable/__internal__/Enumerable.compute.js";
import Enumerable_concat from "./Enumerable/__internal__/Enumerable.concat.js";
import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll.js";
import Enumerable_concatMap from "./Enumerable/__internal__/Enumerable.concatMap.js";
import Enumerable_concatWith from "./Enumerable/__internal__/Enumerable.concatWith.js";
import Enumerable_concatYieldMap from "./Enumerable/__internal__/Enumerable.concatYieldMap.js";
import Enumerable_distinctUntilChanged from "./Enumerable/__internal__/Enumerable.distinctUntilChanged.js";
import Enumerable_empty from "./Enumerable/__internal__/Enumerable.empty.js";
import Enumerable_endWith from "./Enumerable/__internal__/Enumerable.endWith.js";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate.js";
import Enumerable_forEach from "./Enumerable/__internal__/Enumerable.forEach.js";
import Enumerable_generate from "./Enumerable/__internal__/Enumerable.generate.js";
import Enumerable_ignoreElements from "./Enumerable/__internal__/Enumerable.ignoreElements.js";
import Enumerable_keep from "./Enumerable/__internal__/Enumerable.keep.js";
import Enumerable_keepType from "./Enumerable/__internal__/Enumerable.keepType.js";
import Enumerable_map from "./Enumerable/__internal__/Enumerable.map.js";
import Enumerable_mapTo from "./Enumerable/__internal__/Enumerable.mapTo.js";
import Enumerable_pairwise from "./Enumerable/__internal__/Enumerable.pairwise.js";
import Enumerable_repeat from "./Enumerable/__internal__/Enumerable.repeat.js";
import Enumerable_scan from "./Enumerable/__internal__/Enumerable.scan.js";
import Enumerable_skipFirst from "./Enumerable/__internal__/Enumerable.skipFirst.js";
import Enumerable_startWith from "./Enumerable/__internal__/Enumerable.startWith.js";
import Enumerable_takeFirst from "./Enumerable/__internal__/Enumerable.takeFirst.js";
import Enumerable_takeLast from "./Enumerable/__internal__/Enumerable.takeLast.js";
import Enumerable_takeWhile from "./Enumerable/__internal__/Enumerable.takeWhile.js";
import Enumerable_throwIfEmpty from "./Enumerable/__internal__/Enumerable.throwIfEmpty.js";
import Enumerable_throws from "./Enumerable/__internal__/Enumerable.throws.js";
import Enumerable_toAsyncEnumerable from "./Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import Enumerable_toEnumerableObservable from "./Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import Enumerable_toFlowable from "./Enumerable/__internal__/Enumerable.toFlowable.js";
import Enumerable_toIterable from "./Enumerable/__internal__/Enumerable.toIterable.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Enumerable_toRunnable from "./Enumerable/__internal__/Enumerable.toRunnable.js";
import Enumerable_toRunnableObservable from "./Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Enumerable_zip from "./Enumerable/__internal__/Enumerable.zip.js";
import Enumerable_zipWith from "./Enumerable/__internal__/Enumerable.zipWith.js";
export const enumerate = Enumerable_enumerate;
export const buffer = Enumerable_buffer;
export const compute = Enumerable_compute;
export const concat = Enumerable_concat;
export const concatAll = Enumerable_concatAll;
export const concatMap = Enumerable_concatMap;
export const concatWith = Enumerable_concatWith;
export const concatYieldMap = Enumerable_concatYieldMap;
export const distinctUntilChanged = Enumerable_distinctUntilChanged;
export const empty = Enumerable_empty;
export const endWith = Enumerable_endWith;
export const forEach = Enumerable_forEach;
export const fromReadonlyArray = ReadonlyArray_toEnumerable;
export const fromIterable = Iterable_toEnumerable;
export const generate = Enumerable_generate;
export const ignoreElements = Enumerable_ignoreElements;
export const keep = Enumerable_keep;
export const keepType = Enumerable_keepType;
export const map = Enumerable_map;
export const mapTo = Enumerable_mapTo;
export const pairwise = Enumerable_pairwise;
export const repeat = Enumerable_repeat;
export const scan = Enumerable_scan;
export const skipFirst = Enumerable_skipFirst;
export const startWith = Enumerable_startWith;
export const takeFirst = Enumerable_takeFirst;
export const takeLast = Enumerable_takeLast;
export const takeWhile = Enumerable_takeWhile;
export const throwIfEmpty = Enumerable_throwIfEmpty;
export const throws = Enumerable_throws;
export const toAsyncEnumerable = Enumerable_toAsyncEnumerable;
export const toEnumerable = 
/*@__PURE__*/ returns(identity);
export const toEnumerableObservable = Enumerable_toEnumerableObservable;
export const toFlowable = Enumerable_toFlowable;
export const toIterable = Enumerable_toIterable;
export const toObservable = Enumerable_toRunnableObservable;
export const toReadonlyArray = Enumerable_toReadonlyArray;
export const toRunnable = Enumerable_toRunnable;
export const toRunnableObservable = Enumerable_toRunnableObservable;
export const zip = Enumerable_zip;
export const zipWith = Enumerable_zipWith;
/** @ignore */
const Enumerable = {
    buffer,
    compute,
    concat,
    concatAll,
    concatMap,
    concatWith,
    concatYieldMap,
    distinctUntilChanged,
    empty,
    endWith,
    forEach,
    fromReadonlyArray,
    fromIterable,
    generate,
    ignoreElements,
    keep,
    keepType,
    map,
    mapTo,
    pairwise,
    repeat,
    scan,
    skipFirst,
    startWith,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    throws,
    toAsyncEnumerable,
    toEnumerable,
    toEnumerableObservable,
    toFlowable,
    toIterable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    toRunnableObservable,
    zip,
    zipWith,
};
export default Enumerable;
