/// <reference types="./EnumerableObservable.d.ts" />

import { MAX_SAFE_INTEGER } from "../constants.js";
import Iterable_toEnumerableObservable from "../containers/Iterable/__internal__/Iterable.toEnumerableObservable.js";
import ReadonlyArray_toRunnableObservable from "../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import Sequence_toRunnableObservable from "../containers/Sequence/__internal__/Sequence.toRunnableObservable.js";
import { compose, returns } from "../functions.js";
import Enumerable_toEnumerableObservable from "../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import Enumerable_toRunnableObservable from "../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import EnumerableObservable_catchError from "./EnumerableObservable/__internal__/EnumerableObservable.catchError.js";
import EnumerableObservable_defer from "./EnumerableObservable/__internal__/EnumerableObservable.defer.js";
import EnumerableObservable_mergeAll from "./EnumerableObservable/__internal__/EnumerableObservable.mergeAll.js";
import EnumerableObservable_scanAsync from "./EnumerableObservable/__internal__/EnumerableObservable.scanAsync.js";
import EnumerableObservable_switchAll from "./EnumerableObservable/__internal__/EnumerableObservable.switchAll.js";
import EnumerableObservable_toAsyncEnumerable from "./EnumerableObservable/__internal__/EnumerableObservable.toAsyncEnumerable.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable/__internal__/EnumerableObservable.toEnumerable.js";
import EnumerableObservable_toIterable from "./EnumerableObservable/__internal__/EnumerableObservable.toIterable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
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
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import RunnableObservable_toFlowable from "./RunnableObservable/__internal__/RunnableObservable.toFlowable.js";
import RunnableObservable_toReadonlyArray from "./RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.js";
import RunnableObservable_toRunnable from "./RunnableObservable/__internal__/RunnableObservable.toRunnable.js";
export const buffer = Observable_buffer;
export const catchError = EnumerableObservable_catchError;
export const concat = Observable_concat;
export const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = EnumerableObservable_defer;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const everySatisfy = Observable_everySatisfy;
export const exhaust = /*@__PURE__*/ returns(EnumerableObservable_mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
}));
export const forEach = Observable_forEach;
export const fromEnumerable = Enumerable_toEnumerableObservable;
export const fromIterable = Iterable_toEnumerableObservable;
export const fromReadonlyArray = ReadonlyArray_toRunnableObservable;
export const fromSequence = Sequence_toRunnableObservable;
export const generate = Observable_generate;
export const keep = Observable_keep;
export const map = Observable_map;
export const merge = Observable_merge;
export const mergeAll = EnumerableObservable_mergeAll;
export const pairwise = Observable_pairwise;
export const reduce = Observable_reduce;
export const retry = Observable_retry;
export const scan = Observable_scan;
export const scanAsync = EnumerableObservable_scanAsync;
export const skipFirst = Observable_skipFirst;
export const someSatisfy = Observable_someSatisfy;
export const switchAll = EnumerableObservable_switchAll;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeWhile = Observable_takeWhile;
export const throwIfEmpty = Observable_throwIfEmpty;
export const toAsyncEnumerable = EnumerableObservable_toAsyncEnumerable;
export const toEnumerable = EnumerableObservable_toEnumerable;
export const toFlowable = RunnableObservable_toFlowable;
export const toIterable = EnumerableObservable_toIterable;
export const toReadonlyArray = RunnableObservable_toReadonlyArray;
export const toRunnable = RunnableObservable_toRunnable;
export const toRunnableObservable = o => compose(toEnumerable(), Enumerable_toRunnableObservable(o));
export const toObservable = toRunnableObservable;
export const zip = Observable_zip;
/** @ignore */
const EnumerableObservable = {
    buffer,
    catchError,
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
    takeWhile,
    throwIfEmpty,
    toAsyncEnumerable,
    toEnumerable,
    toFlowable,
    toIterable,
    toObservable,
    toReadonlyArray,
    toRunnable,
    toRunnableObservable,
    zip,
};
export default EnumerableObservable;
