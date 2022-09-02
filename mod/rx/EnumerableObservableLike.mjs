/// <reference types="./EnumerableObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/constants.mjs';
import { createEnumerableObservable, deferEnumerableObservable } from '../__internal__/rx/ObservableLike.create.mjs';
import { catchErrorEnumerableObservable, mergeAllEnumerableObservable, scanAsyncEnumerableObservable, switchAllEnumerableObservable } from '../__internal__/rx/ObservableLike.higher-order.mjs';
import { buffer, concat, decodeWithCharset, distinctUntilChanged, empty, everySatisfy, forEach, generate, keep, map, merge, never, pairwise, reduce, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, zip } from './ObservableLike.mjs';

const create = createEnumerableObservable;
const defer = deferEnumerableObservable;
const deferT = {
    defer,
};
const bufferT = {
    buffer: buffer,
};
const catchError = catchErrorEnumerableObservable;
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
const generateeT = { generate };
const keepT = {
    keep: keep,
};
const mapT = {
    map: map,
};
const mergeT = {
    concat: merge,
};
const mergeAll = mergeAllEnumerableObservable;
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
const scanAsync = scanAsyncEnumerableObservable;
const scanAsyncT = { scanAsync };
const skipFirstT = {
    skipFirst: skipFirst,
};
const someSatisfyT = {
    someSatisfy: someSatisfy,
};
const switchAll = switchAllEnumerableObservable;
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

export { bufferT, catchError, catchErrorT, concatAll, concatT, create, decodeWithCharsetT, defer, deferT, distinctUntilChangedT, emptyT, everySatisfyT, exhaust, exhaustT, forEachT, generateeT, keepT, mapT, mergeAll, mergeAllT, mergeT, neverT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, someSatisfyT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };
