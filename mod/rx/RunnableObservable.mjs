/// <reference types="./RunnableObservable.d.ts" />
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import Observable_buffer from './Observable/__internal__/Observable.buffer.mjs';
import Observable_combineLatest from './Observable/__internal__/Observable.combineLatest.mjs';
import Observable_concat from './Observable/__internal__/Observable.concat.mjs';
import Observable_decodeWithCharset from './Observable/__internal__/Observable.decodeWithCharset.mjs';
import Observable_distinctUntilChanged from './Observable/__internal__/Observable.distinctUntilChanged.mjs';
import Observable_empty from './Observable/__internal__/Observable.empty.mjs';
import Observable_everySatisfy from './Observable/__internal__/Observable.everySatisfy.mjs';
import Observable_forEach from './Observable/__internal__/Observable.forEach.mjs';
import Observable_fromArray from './Observable/__internal__/Observable.fromArray.mjs';
import Observable_generate from './Observable/__internal__/Observable.generate.mjs';
import Observable_keep from './Observable/__internal__/Observable.keep.mjs';
import Observable_map from './Observable/__internal__/Observable.map.mjs';
import Observable_merge from './Observable/__internal__/Observable.merge.mjs';
import Observable_pairwise from './Observable/__internal__/Observable.pairwise.mjs';
import Observable_reduce from './Observable/__internal__/Observable.reduce.mjs';
import Observable_scan from './Observable/__internal__/Observable.scan.mjs';
import Observable_skipFirst from './Observable/__internal__/Observable.skipFirst.mjs';
import Observable_someSatisfy from './Observable/__internal__/Observable.someSatisfy.mjs';
import Observable_takeFirst from './Observable/__internal__/Observable.takeFirst.mjs';
import Observable_takeLast from './Observable/__internal__/Observable.takeLast.mjs';
import Observable_takeWhile from './Observable/__internal__/Observable.takeWhile.mjs';
import Observable_throwIfEmpty from './Observable/__internal__/Observable.throwIfEmpty.mjs';
import Observable_toFlowable from './Observable/__internal__/Observable.toFlowable.mjs';
import Observable_toPromise from './Observable/__internal__/Observable.toPromise.mjs';
import Observable_zip from './Observable/__internal__/Observable.zip.mjs';
import RunnableObservable_catchError from './RunnableObservable/__internal__/RunnableObservable.catchError.mjs';
import RunnableObservable_defer from './RunnableObservable/__internal__/RunnableObservable.defer.mjs';
import RunnableObservable_mergeAll from './RunnableObservable/__internal__/RunnableObservable.mergeAll.mjs';
import RunnableObservable_scanAsync from './RunnableObservable/__internal__/RunnableObservable.scanAsync.mjs';
import RunnableObservable_switchAll from './RunnableObservable/__internal__/RunnableObservable.switchAll.mjs';
import RunnableObservable_toReadonlyArray from './RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.mjs';
import RunnableObservable_toRunnable from './RunnableObservable/__internal__/RunnableObservable.toRunnable.mjs';

const buffer = Observable_buffer;
const catchError = RunnableObservable_catchError;
const combineLatest = Observable_combineLatest;
const concat = Observable_concat;
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const decodeWithCharset = Observable_decodeWithCharset;
const defer = RunnableObservable_defer;
const distinctUntilChanged = Observable_distinctUntilChanged;
const empty = Observable_empty;
const everySatisfy = Observable_everySatisfy;
const exhaust = () => mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
const forEach = Observable_forEach;
const fromArray = Observable_fromArray;
const generate = Observable_generate;
const keep = Observable_keep;
const map = Observable_map;
const merge = Observable_merge;
const mergeAll = RunnableObservable_mergeAll;
const pairwise = Observable_pairwise;
const reduce = Observable_reduce;
const scan = Observable_scan;
const scanAsync = RunnableObservable_scanAsync;
const skipFirst = Observable_skipFirst;
const someSatisfy = Observable_someSatisfy;
const switchAll = RunnableObservable_switchAll;
const takeFirst = Observable_takeFirst;
const takeLast = Observable_takeLast;
const takeWhile = Observable_takeWhile;
const throwIfEmpty = Observable_throwIfEmpty;
const toFlowable = Observable_toFlowable;
const toPromise = Observable_toPromise;
const toReadonlyArray = RunnableObservable_toReadonlyArray;
const toRunnable = RunnableObservable_toRunnable;
const zip = Observable_zip;
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
    fromArray,
    generate,
    keep,
    map,
    merge,
    pairwise,
    reduce,
    scan,
    scanAsync,
    skipFirst,
    someSatisfy,
    switchAll,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    toFlowable,
    toPromise,
    toReadonlyArray,
    toRunnable,
    zip,
};

export { buffer, catchError, combineLatest, concat, concatAll, decodeWithCharset, RunnableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromArray, generate, keep, map, merge, mergeAll, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toFlowable, toPromise, toReadonlyArray, toRunnable, zip };
