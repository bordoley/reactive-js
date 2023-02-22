/// <reference types="./Runnable.d.ts" />

import Iterable_toRunnable from "../containers/Iterable/__internal__/Iterable.toRunnable.js";
import ReadonlyArray_toRunnable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { identity, returns } from "../functions.js";
import Enumerable_toRunnable from "../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import Runnable_buffer from "./Runnable/__internal__/Runnable.buffer.js";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError.js";
import Runnable_compute from "./Runnable/__internal__/Runnable.compute.js";
import Runnable_concat from "./Runnable/__internal__/Runnable.concat.js";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll.js";
import Runnable_concatMap from "./Runnable/__internal__/Runnable.concatMap.js";
import Runnable_concatWith from "./Runnable/__internal__/Runnable.concatWith.js";
import Runnable_concatYieldMap from "./Runnable/__internal__/Runnable.concatYieldMap.js";
import Runnable_contains from "./Runnable/__internal__/Runnable.contains.js";
import Runnable_create from "./Runnable/__internal__/Runnable.create.js";
import Runnable_decodeWithCharset from "./Runnable/__internal__/Runnable.decodeWithCharset.js";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer.js";
import Runnable_distinctUntilChanged from "./Runnable/__internal__/Runnable.distinctUntilChanged.js";
import Runnable_empty from "./Runnable/__internal__/Runnable.empty.js";
import Runnable_encodeUtf8 from "./Runnable/__internal__/Runnable.encodeUtf8.js";
import Runnable_endWith from "./Runnable/__internal__/Runnable.endWith.js";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy.js";
import Runnable_first from "./Runnable/__internal__/Runnable.first.js";
import Runnable_forEach from "./Runnable/__internal__/Runnable.forEach.js";
import Runnable_generate from "./Runnable/__internal__/Runnable.generate.js";
import Runnable_ignoreElements from "./Runnable/__internal__/Runnable.ignoreElements.js";
import Runnable_keep from "./Runnable/__internal__/Runnable.keep.js";
import Runnable_keepType from "./Runnable/__internal__/Runnable.keepType.js";
import Runnable_last from "./Runnable/__internal__/Runnable.last.js";
import Runnable_map from "./Runnable/__internal__/Runnable.map.js";
import Runnable_mapTo from "./Runnable/__internal__/Runnable.mapTo.js";
import Runnable_never from "./Runnable/__internal__/Runnable.never.js";
import Runnable_onRun from "./Runnable/__internal__/Runnable.onRun.js";
import Runnable_pairwise from "./Runnable/__internal__/Runnable.pairwise.js";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce.js";
import Runnable_repeat from "./Runnable/__internal__/Runnable.repeat.js";
import Runnable_run from "./Runnable/__internal__/Runnable.run.js";
import Runnable_scan from "./Runnable/__internal__/Runnable.scan.js";
import Runnable_skipFirst from "./Runnable/__internal__/Runnable.skipFirst.js";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy.js";
import Runnable_startWith from "./Runnable/__internal__/Runnable.startWith.js";
import Runnable_takeFirst from "./Runnable/__internal__/Runnable.takeFirst.js";
import Runnable_takeLast from "./Runnable/__internal__/Runnable.takeLast.js";
import Runnable_takeWhile from "./Runnable/__internal__/Runnable.takeWhile.js";
import Runnable_throwIfEmpty from "./Runnable/__internal__/Runnable.throwIfEmpty.js";
import Runnable_throws from "./Runnable/__internal__/Runnable.throws.js";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";
export const buffer = Runnable_buffer;
export const catchError = Runnable_catchError;
export const compute = Runnable_compute;
export const concat = Runnable_concat;
export const concatAll = Runnable_concatAll;
export const concatMap = Runnable_concatMap;
export const concatWith = Runnable_concatWith;
export const concatYieldMap = Runnable_concatYieldMap;
export const contains = Runnable_contains;
export const create = Runnable_create;
export const decodeWithCharset = Runnable_decodeWithCharset;
export const defer = Runnable_defer;
export const distinctUntilChanged = Runnable_distinctUntilChanged;
export const empty = Runnable_empty;
export const encodeUtf8 = Runnable_encodeUtf8;
export const endWith = Runnable_endWith;
export const everySatisfy = Runnable_everySatisfy;
export const first = Runnable_first;
export const forEach = Runnable_forEach;
export const fromEnumerable = Enumerable_toRunnable;
export const fromEnumerableObservable = RunnableObservable_toRunnable;
export const fromIterable = Iterable_toRunnable;
export const fromReadonlyArray = ReadonlyArray_toRunnable;
export const fromRunnableObservable = RunnableObservable_toRunnable;
export const generate = Runnable_generate;
export const ignoreElements = Runnable_ignoreElements;
export const keep = Runnable_keep;
export const keepType = Runnable_keepType;
export const last = Runnable_last;
export const map = Runnable_map;
export const mapTo = Runnable_mapTo;
export const never = Runnable_never;
export const onRun = Runnable_onRun;
export const pairwise = Runnable_pairwise;
export const reduce = Runnable_reduce;
export const repeat = Runnable_repeat;
export const run = Runnable_run;
export const scan = Runnable_scan;
export const skipFirst = Runnable_skipFirst;
export const someSatisfy = Runnable_someSatisfy;
export const startWith = Runnable_startWith;
export const takeFirst = Runnable_takeFirst;
export const takeLast = Runnable_takeLast;
export const takeWhile = Runnable_takeWhile;
export const throwIfEmpty = Runnable_throwIfEmpty;
export const throws = Runnable_throws;
export const toReadonlyArray = Runnable_toReadonlyArray;
export const toRunnable = 
/*@__PURE__*/ returns(identity);
/** @ignore */
const Runnable = {
    buffer,
    catchError,
    compute,
    concat,
    concatAll,
    concatMap,
    concatWith,
    concatYieldMap,
    contains,
    create,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    encodeUtf8,
    endWith,
    everySatisfy,
    first,
    forEach,
    fromEnumerable,
    fromEnumerableObservable,
    fromIterable,
    fromReadonlyArray,
    fromRunnableObservable,
    generate,
    ignoreElements,
    keep,
    keepType,
    last,
    map,
    mapTo,
    never,
    onRun,
    pairwise,
    reduce,
    repeat,
    run,
    scan,
    skipFirst,
    someSatisfy,
    startWith,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    throws,
    toReadonlyArray,
    toRunnable,
};
export default Runnable;
