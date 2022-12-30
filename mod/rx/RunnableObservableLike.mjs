/// <reference types="./RunnableObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/constants.mjs';
import { createRunnableObservable, deferRunnableObservable } from '../__internal__/rx/ObservableLike.create.mjs';
import { catchErrorRunnableObservable, mergeAllRunnableObservable, scanAsyncRunnableObservable, switchAllRunnableObservable } from '../__internal__/rx/ObservableLike.higher-order.mjs';
import { I as buffer, d as concat, J as decodeWithCharset, K as distinctUntilChanged, i as empty, L as everySatisfy, f as forEach, g as generate, H as keep, h as map, m as merge, M as never, N as pairwise, O as reduce, B as scan, P as skipFirst, Q as someSatisfy, b as takeFirst, v as takeLast, F as takeWhile, R as throwIfEmpty, a as toReadonlyArray, z as zip } from '../ObservableLike-ca8b1474.mjs';

const create = createRunnableObservable;
const defer = deferRunnableObservable;
const deferT = {
    defer,
};
const bufferT = {
    buffer: buffer,
};
const catchError = catchErrorRunnableObservable;
const catchErrorT = { catchError };
const concatT = {
    concat: concat,
};
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const decodeWithCharsetT = {
    decodeWithCharset: decodeWithCharset,
};
const distinctUntilChangedT = {
    distinctUntilChanged: distinctUntilChanged,
};
const emptyT = {
    empty,
};
const everySatisfyT = {
    everySatisfy: everySatisfy,
};
const exhaust = () => mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
const exhaustT = {
    concatAll: exhaust,
};
const forEachT = {
    forEach: forEach,
};
const generateT = { generate };
const keepT = {
    keep: keep,
};
const mapT = {
    map: map,
};
const mergeT = {
    concat: merge,
};
const mergeAll = mergeAllRunnableObservable;
const mergeAllT = { concatAll: mergeAll };
const neverT = {
    never,
};
const pairwiseT = {
    pairwise: pairwise,
};
const reduceT = {
    reduce: reduce,
};
const scanT = {
    scan: scan,
};
const scanAsync = scanAsyncRunnableObservable;
const scanAsyncT = { scanAsync };
const skipFirstT = {
    skipFirst: skipFirst,
};
const someSatisfyT = {
    someSatisfy: someSatisfy,
};
const switchAll = switchAllRunnableObservable;
const switchAllT = {
    concatAll: switchAll,
};
const takeFirstT = {
    takeFirst: takeFirst,
};
const takeLastT = {
    takeLast: takeLast,
};
const takeWhileT = {
    takeWhile: takeWhile,
};
const throwIfEmptyT = {
    throwIfEmpty: throwIfEmpty,
};
const toReadonlyArrayT = { toReadonlyArray };
const zipT = {
    zip: zip,
};

export { bufferT, catchError, catchErrorT, concatAll, concatT, create, decodeWithCharsetT, defer, deferT, distinctUntilChangedT, emptyT, everySatisfyT, exhaust, exhaustT, forEachT, generateT, keepT, mapT, mergeAll, mergeAllT, mergeT, neverT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, someSatisfyT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };
