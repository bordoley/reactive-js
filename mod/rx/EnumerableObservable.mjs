/// <reference types="./EnumerableObservable.d.ts" />
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import EnumerableObservable_catchError from './EnumerableObservable/__internal__/EnumerableObservable.catchError.mjs';
import EnumerableObservable_create from './EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import EnumerableObservable_defer from './EnumerableObservable/__internal__/EnumerableObservable.defer.mjs';
import EnumerableObservable_mergeAll from './EnumerableObservable/__internal__/EnumerableObservable.mergeAll.mjs';
import EnumerableObservable_never from './EnumerableObservable/__internal__/EnumerableObservable.never.mjs';
import EnumerableObservable_scanAsync from './EnumerableObservable/__internal__/EnumerableObservable.scanAsync.mjs';
import EnumerableObservable_switchAll from './EnumerableObservable/__internal__/EnumerableObservable.switchAll.mjs';
import EnumerableObservable_toEnumerable from './EnumerableObservable/__internal__/EnumerableObservable.toEnumerable.mjs';
import Observable_buffer from './Observable/__internal__/Observable.buffer.mjs';
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
import RunnableObservable_toReadonlyArray from './RunnableObservable/__internal__/RunnableObservable.toReadonlyArray.mjs';
import RunnableObservable_toRunnable from './RunnableObservable/__internal__/RunnableObservable.toRunnable.mjs';

const buffer = Observable_buffer;
const catchError = EnumerableObservable_catchError;
const concat = Observable_concat;
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const create = EnumerableObservable_create;
const decodeWithCharset = Observable_decodeWithCharset;
const defer = EnumerableObservable_defer;
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
const mergeAll = EnumerableObservable_mergeAll;
const never = EnumerableObservable_never;
const pairwise = Observable_pairwise;
const reduce = Observable_reduce;
const scan = Observable_scan;
const scanAsync = EnumerableObservable_scanAsync;
const skipFirst = Observable_skipFirst;
const someSatisfy = Observable_someSatisfy;
const switchAll = EnumerableObservable_switchAll;
const takeFirst = Observable_takeFirst;
const takeLast = Observable_takeLast;
const takeWhile = Observable_takeWhile;
const throwIfEmpty = Observable_throwIfEmpty;
const toEnumerable = EnumerableObservable_toEnumerable;
const toFlowable = Observable_toFlowable;
const toPromise = Observable_toPromise;
const toReadonlyArray = RunnableObservable_toReadonlyArray;
const toRunnable = RunnableObservable_toRunnable;
const zip = Observable_zip;
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
    toEnumerable,
    toFlowable,
    toPromise,
    toReadonlyArray,
    toRunnable,
    zip,
};

export { buffer, catchError, concat, concatAll, create, decodeWithCharset, EnumerableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromArray, generate, keep, map, merge, mergeAll, never, pairwise, reduce, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, zip };
