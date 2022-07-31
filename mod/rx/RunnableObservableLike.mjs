/// <reference types="./RunnableObservableLike.d.ts" />
import { pipe, isSome } from '../functions.mjs';
import { createVirtualTimeScheduler } from '../scheduling.mjs';
import { run } from '../util/ContinuationLike.mjs';
import '../util/DisposableLike.mjs';
import { decodeWithCharset as decodeWithCharset$1, forEach as forEach$1, map as map$1, subscribe } from './ObservableLike.mjs';
import { addTo, getException } from '../__internal__/util/DisposableLikeInternal.mjs';

const decodeWithCharset = decodeWithCharset$1;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const forEach = forEach$1;
const forEachT = { forEach };
const map = map$1;
const mapT = { map };
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

export { decodeWithCharset, decodeWithCharsetT, forEach, forEachT, map, mapT, toReadonlyArray, toReadonlyArrayT };
