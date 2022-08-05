/// <reference types="./EnumerableObservableLike.d.ts" />
import { buffer, concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable as toEnumerable$1, zip } from './ObservableLike.mjs';
import { toFlowable as toFlowable$1, toReadonlyArray as toReadonlyArray$1 } from './RunnableObservableLike.mjs';

const bufferT = {
    buffer: buffer,
};
const concatT = {
    concat,
};
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChangedT = { distinctUntilChanged };
const forEachT = { forEach };
const keepT = { keep };
const mapT = { map };
const mergeT = {
    concat: merge,
};
const pairwiseT = { pairwise };
const reduceT = { reduce };
const scanT = { scan };
const skipFirstT = { skipFirst };
const takeFirstT = { takeFirst };
const takeLastT = { takeLast };
const takeWhileT = { takeWhile };
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = toEnumerable$1;
const toEnumerableT = {
    toEnumerable,
};
const toFlowable = toFlowable$1;
const toFlowableT = { toFlowable };
const toReadonlyArray = toReadonlyArray$1;
const toReadonlyArrayT = { toReadonlyArray };
const zipT = {
    zip: zip,
};

export { bufferT, concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT, zipT };
