/// <reference types="./RunnableObservable.d.ts" />

import { MAX_SAFE_INTEGER } from "../constants.js";
import Iterable_toRunnableObservable from "../containers/Iterable/__internal__/Iterable.toRunnableObservable.js";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable.js";
import { identity, returns } from "../functions.js";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_everySatisfy from "./Observable/__internal__/Observable.everySatisfy.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_reduce from "./Observable/__internal__/Observable.reduce.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_someSatisfy from "./Observable/__internal__/Observable.someSatisfy.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__internal__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_timeout from "./Observable/__internal__/Observable.timeout.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import RunnableObservable_catchError from "./RunnableObservable/__internal__/RunnableObservable.catchError.js";
import RunnableObservable_defer from "./RunnableObservable/__internal__/RunnableObservable.defer.js";
import RunnableObservable_mergeAll from "./RunnableObservable/__internal__/RunnableObservable.mergeAll.js";
import RunnableObservable_scanAsync from "./RunnableObservable/__internal__/RunnableObservable.scanAsync.js";
import RunnableObservable_switchAll from "./RunnableObservable/__internal__/RunnableObservable.switchAll.js";
import RunnableObservable_toFlowable from "./RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";
import RunnableObservable_throttle from "./RunnableObservable/__internal__/RunnableObservableLike.throttle.js";
export const buffer = Observable_buffer;
export const catchError = RunnableObservable_catchError;
export const combineLatest = Observable_combineLatest;
export const concat = Observable_concat;
export const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = RunnableObservable_defer;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const everySatisfy = Observable_everySatisfy;
export const exhaust = /*@__PURE__*/ returns(RunnableObservable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
}));
export const forEach = Observable_forEach;
export const fromEnumerable = Enumerable_toRunnableObservable;
export const fromIterable = Iterable_toRunnableObservable;
export const fromReadonlyArray = ReadonlyArray_toRunnableObservable;
export const fromSequence = Sequence_toRunnableObservable;
export const generate = Observable_generate;
export const keep = Observable_keep;
export const map = Observable_map;
export const merge = Observable_merge;
export const mergeAll = RunnableObservable_mergeAll;
export const pairwise = Observable_pairwise;
export const reduce = Observable_reduce;
export const retry = Observable_retry;
export const scan = Observable_scan;
export const scanAsync = RunnableObservable_scanAsync;
export const skipFirst = Observable_skipFirst;
export const someSatisfy = Observable_someSatisfy;
export const switchAll = RunnableObservable_switchAll;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeUntil = Observable_takeUntil;
export const takeWhile = Observable_takeWhile;
export const throttle = RunnableObservable_throttle;
export const throwIfEmpty = Observable_throwIfEmpty;
export const timeout = Observable_timeout;
export const toFlowable = RunnableObservable_toFlowable;
export const toObservable = 
/*@__PURE__*/ returns(identity);
export const toReadonlyArray = RunnableObservable_toReadonlyArray;
export const toRunnable = RunnableObservable_toRunnable;
export const withLatestFrom = Observable_withLatestFrom;
export const zip = Observable_zip;
export const zipLatest = Observable_zipLatest;
export const zipWithLatestFrom = Observable_zipWithLatestFrom;
/** @ignore */
const RunnableObservable = {
    buffer,
    catchError,
    combineLatest,
    concat,
    concatAll,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    everySatisfy,
    exhaust,
    forEach,
    fromEnumerable,
    fromIterable,
    fromReadonlyArray,
    fromSequence,
    generate,
    keep,
    map,
    merge,
    pairwise,
    reduce,
    retry,
    scan,
    scanAsync,
    skipFirst,
    someSatisfy,
    switchAll,
    takeFirst,
    takeLast,
    takeUntil,
    takeWhile,
    throttle,
    throwIfEmpty,
    timeout,
    toFlowable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    withLatestFrom,
    zip,
    zipLatest,
    zipWithLatestFrom,
};
export default RunnableObservable;
