/// <reference types="./EnumerableObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../constants.mjs';
import { buffer, concat, decodeWithCharset, distinctUntilChanged, empty, everySatisfy, forEach, generate, keep, map, merge, never, pairwise, reduce, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, zip } from './ObservableLike.mjs';
import EnumerableObservableLike__catchError from './__internal__/EnumerableObservableLike/EnumerableObservableLike.catchError.mjs';
import EnumerableObservableLike__create from './__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import EnumerableObservableLike__defer from './__internal__/EnumerableObservableLike/EnumerableObservableLike.defer.mjs';
import EnumerableObservableLike__mergeAll from './__internal__/EnumerableObservableLike/EnumerableObservableLike.mergeAll.mjs';
import EnumerableObservableLike__scanAsync from './__internal__/EnumerableObservableLike/EnumerableObservableLike.scanAsync.mjs';
import EnumerableObservableLike__switchAll from './__internal__/EnumerableObservableLike/EnumerableObservableLike.switchAll.mjs';

const create = EnumerableObservableLike__create;
const defer = EnumerableObservableLike__defer;
const deferT = {
    defer,
};
const bufferT = {
    buffer: buffer,
};
const catchError = EnumerableObservableLike__catchError;
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
const mergeAll = EnumerableObservableLike__mergeAll;
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
const scanAsync = EnumerableObservableLike__scanAsync;
const scanAsyncT = { scanAsync };
const skipFirstT = {
    skipFirst: skipFirst,
};
const someSatisfyT = {
    someSatisfy: someSatisfy,
};
const switchAll = EnumerableObservableLike__switchAll;
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
