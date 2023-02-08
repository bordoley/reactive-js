/// <reference types="./RunnableObservable.d.ts" />
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import EnumerableObservable_never from './__internal__/EnumerableObservable/EnumerableObservable.never.mjs';
import Observable_buffer from './__internal__/Observable/Observable.buffer.mjs';
import Observable_concat from './__internal__/Observable/Observable.concat.mjs';
import Observable_decodeWithCharset from './__internal__/Observable/Observable.decodeWithCharset.mjs';
import Observable_distinctUntilChanged from './__internal__/Observable/Observable.distinctUntilChanged.mjs';
import Observable_empty from './__internal__/Observable/Observable.empty.mjs';
import Observable_everySatisfy from './__internal__/Observable/Observable.everySatisfy.mjs';
import Observable_forEach from './__internal__/Observable/Observable.forEach.mjs';
import Observable_fromArray from './__internal__/Observable/Observable.fromArray.mjs';
import Observable_generate from './__internal__/Observable/Observable.generate.mjs';
import Observable_keep from './__internal__/Observable/Observable.keep.mjs';
import Observable_map from './__internal__/Observable/Observable.map.mjs';
import Observable_merge from './__internal__/Observable/Observable.merge.mjs';
import Observable_pairwise from './__internal__/Observable/Observable.pairwise.mjs';
import Observable_reduce from './__internal__/Observable/Observable.reduce.mjs';
import Observable_scan from './__internal__/Observable/Observable.scan.mjs';
import Observable_skipFirst from './__internal__/Observable/Observable.skipFirst.mjs';
import Observable_someSatisfy from './__internal__/Observable/Observable.someSatisfy.mjs';
import Observable_takeFirst from './__internal__/Observable/Observable.takeFirst.mjs';
import Observable_takeLast from './__internal__/Observable/Observable.takeLast.mjs';
import Observable_takeWhile from './__internal__/Observable/Observable.takeWhile.mjs';
import Observable_throwIfEmpty from './__internal__/Observable/Observable.throwIfEmpty.mjs';
import Observable_toEnumerable from './__internal__/Observable/Observable.toEnumerable.mjs';
import Observable_toFlowable from './__internal__/Observable/Observable.toFlowable.mjs';
import Observable_toPromise from './__internal__/Observable/Observable.toPromise.mjs';
import Observable_toReadonlyArray from './__internal__/Observable/Observable.toReadonlyArray.mjs';
import Observable_toRunnable from './__internal__/Observable/Observable.toRunnable.mjs';
import Observable_zip from './__internal__/Observable/Observable.zip.mjs';
import RunnableObservable_catchError from './__internal__/RunnableObservable/RunnableObservable.catchError.mjs';
import RunnableObservable_create from './__internal__/RunnableObservable/RunnableObservable.create.mjs';
import RunnableObservable_defer from './__internal__/RunnableObservable/RunnableObservable.defer.mjs';
import RunnableObservable_mergeAll from './__internal__/RunnableObservable/RunnableObservable.mergeAll.mjs';
import RunnableObservable_scanAsync from './__internal__/RunnableObservable/RunnableObservable.scanAsync.mjs';
import RunnableObservable_switchAll from './__internal__/RunnableObservable/RunnableObservable.switchAll.mjs';

const buffer = Observable_buffer;
const catchError = RunnableObservable_catchError;
const concat = Observable_concat;
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const create = RunnableObservable_create;
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
const never = EnumerableObservable_never;
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
const toEnumerable = Observable_toEnumerable;
const toFlowable = Observable_toFlowable;
const toPromise = Observable_toPromise;
const toReadonlyArray = Observable_toReadonlyArray;
const toRunnable = Observable_toRunnable;
const zip = Observable_zip;
/** @ignore */
const RunnableObservable = {
    buffer,
    catchError,
    concat,
    concatAll,
    decodeWithCharset,
    defer,
    distinctUntilChanged,
    empty,
    everySatisfy,
    forEach,
    fromArray,
    generate,
    keep,
    map,
    never,
    pairwise,
    reduce,
    scan,
    scanAsync,
    skipFirst,
    someSatisfy,
    takeFirst,
    takeLast,
    takeWhile,
    throwIfEmpty,
    toEnumerable,
    toFlowable,
    toPromise,
    toReadonlyArray,
    toRunnable,
    zip,
};

export { buffer, catchError, concat, concatAll, create, decodeWithCharset, RunnableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromArray, generate, keep, map, merge, mergeAll, never, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, zip };
