/// <reference types="./RunnableObservableLike.d.ts" />
import { pipe, isSome } from '../functions.mjs';
import { createVirtualTimeScheduler } from '../scheduling.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { decodeWithCharset as decodeWithCharset$1, distinctUntilChanged as distinctUntilChanged$1, forEach as forEach$1, keep as keep$1, map as map$1, pairwise as pairwise$1, reduce as reduce$1, scan as scan$1, skipFirst as skipFirst$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeWhile as takeWhile$1, throwIfEmpty as throwIfEmpty$1, subscribe } from './ObservableLike.mjs';
import { addTo, getException } from '../__internal__/util/DisposableLikeInternal.mjs';

const decodeWithCharset = decodeWithCharset$1;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = { distinctUntilChanged };
const forEach = forEach$1;
const forEachT = { forEach };
const keep = keep$1;
const keepT = { keep };
const map = map$1;
const mapT = { map };
const pairwise = pairwise$1;
const pairwiseT = { pairwise };
const reduce = reduce$1;
const reduceT = { reduce };
const scan = scan$1;
const scanT = { scan };
const skipFirst = skipFirst$1;
const skipFirstT = { skipFirst };
const takeFirst = takeFirst$1;
const takeFirstT = { takeFirst };
const takeLast = takeLast$1;
const takeLastT = { takeLast };
const takeWhile = takeWhile$1;
const takeWhileT = { takeWhile };
const throwIfEmpty = throwIfEmpty$1;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toReadonlyArray = (options = {}) => observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result = [];
    pipe(observable, forEach(next => {
        result.push(next);
    }), subscribe(scheduler), addTo(scheduler));
    pipe(scheduler, run);
    const exception = getException(scheduler);
    if (isSome(exception)) {
        throw exception.cause;
    }
    return result;
};
const toReadonlyArrayT = { toReadonlyArray };

export { decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, keep, keepT, map, mapT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toReadonlyArray, toReadonlyArrayT };
