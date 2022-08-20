/// <reference types="./RunnableObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/__internal__env.mjs';
import { createCatchError, createMergeAll, createScanAsync, createSwitchAll } from '../__internal__/rx/__internal__ObservableLike.mjs';
import { pipeUnsafe, newInstance } from '../functions.mjs';
import { O as ObservableLike_isEnumerable, a as ObservableLike_isRunnable, R as ReactiveContainerLike_sinkInto, d as createRunnableObservable } from '../rx-fcdda9a1.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';
import { buffer, concat, decodeWithCharset, distinctUntilChanged, everySatisfy, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, someSatisfy, takeFirst, takeLast, takeWhile, throwIfEmpty, toReadonlyArray, zip } from './ObservableLike.mjs';

const lift = 
/*@__PURE__*/ (() => {
    var _a, _b;
    class LiftedRunnableObservable {
        constructor(source, operators) {
            this.source = source;
            this.operators = operators;
            this[_a] = false;
            this[_b] = true;
        }
        [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ReactiveContainerLike_sinkInto)](observer) {
            pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
        }
    }
    return (operator) => source => {
        const sourceSource = source instanceof LiftedRunnableObservable ? source.source : source;
        const allFunctions = source instanceof LiftedRunnableObservable
            ? [operator, ...source.operators]
            : [operator];
        return newInstance(LiftedRunnableObservable, sourceSource, allFunctions);
    };
})();
const bufferT = {
    buffer: buffer,
};
const catchError = 
/*@__PURE__*/ createCatchError(lift);
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
const keepT = {
    keep: keep,
};
const mapT = {
    map: map,
};
const mergeT = {
    concat: merge,
};
const mergeAll = /*@__PURE__*/ createMergeAll(lift);
const mergeAllT = { concatAll: mergeAll };
const pairwiseT = {
    pairwise: pairwise,
};
const reduceT = {
    reduce: reduce,
};
const scanT = {
    scan: scan,
};
const scanAsync = createScanAsync(createRunnableObservable);
const scanAsyncT = { scanAsync };
const skipFirstT = {
    skipFirst: skipFirst,
};
const someSatisfyT = {
    someSatisfy: someSatisfy,
};
const switchAll = 
/*@__PURE__*/ createSwitchAll(lift);
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

export { bufferT, catchError, catchErrorT, concatAll, concatT, decodeWithCharsetT, distinctUntilChangedT, everySatisfyT, exhaust, exhaustT, forEachT, keepT, mapT, mergeAll, mergeAllT, mergeT, pairwiseT, reduceT, scanAsync, scanAsyncT, scanT, skipFirstT, someSatisfyT, switchAll, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toReadonlyArrayT, zipT };
