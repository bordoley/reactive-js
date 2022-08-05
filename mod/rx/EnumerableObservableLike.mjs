/// <reference types="./EnumerableObservableLike.d.ts" />
import { buffer, concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toReadonlyArray, zip } from './ObservableLike.mjs';
import { toFlowable } from './RunnableObservableLike.mjs';

const bufferT = {
    buffer: buffer,
};
const concatT = {
    concat: concat,
};
const decodeWithCharsetT = {
    decodeWithCharset: decodeWithCharset,
};
const distinctUntilChangedT = {
    distinctUntilChanged: distinctUntilChanged,
};
const forEachT = {
    forEach: forEach,
};
const keepT = {
    keep: keep,
};
const mapT = {
    map: map,
};
const mergeT = {
    concat: merge,
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
const skipFirstT = {
    skipFirst: skipFirst,
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
const toEnumerableT = {
    toEnumerable: toEnumerable,
};
const toFlowableT = { toFlowable };
const toReadonlyArrayT = {
    toReadonlyArray: toReadonlyArray,
};
const zipT = {
    zip: zip,
};

export { bufferT, concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toEnumerableT, toFlowableT, toReadonlyArrayT, zipT };
