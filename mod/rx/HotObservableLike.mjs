/// <reference types="./HotObservableLike.d.ts" />
import { concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty } from './ObservableLike.mjs';

const concatT = {
    concat,
};
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChangedT = {
    distinctUntilChanged,
};
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
const switchAllT = {
    concatAll: switchAll,
};
const takeFirstT = { takeFirst };
const takeLastT = { takeLast };
const takeWhileT = { takeWhile };
const throwIfEmptyT = {
    throwIfEmpty,
};

export { concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT };
