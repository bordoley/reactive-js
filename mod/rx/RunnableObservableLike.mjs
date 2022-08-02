/// <reference types="./RunnableObservableLike.d.ts" />
import { pipe, isSome } from '../functions.mjs';
import { createObservable } from '../rx.mjs';
import { createVirtualTimeScheduler } from '../scheduling.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { toPausableScheduler } from '../scheduling/SchedulerLike.mjs';
import { createLiftedFlowable } from '../streaming.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { toObservable } from '../util/DisposableLike.mjs';
import { resume, pause } from '../util/PauseableLike.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';
import { concat as concat$1, decodeWithCharset as decodeWithCharset$1, distinctUntilChanged as distinctUntilChanged$1, forEach as forEach$1, forkMerge as forkMerge$1, keep as keep$1, map as map$1, merge as merge$1, pairwise as pairwise$1, reduce as reduce$1, scan as scan$1, skipFirst as skipFirst$1, takeFirst as takeFirst$1, takeLast as takeLast$1, takeUntil as takeUntil$1, takeWhile as takeWhile$1, throwIfEmpty as throwIfEmpty$1, subscribeOn, subscribe } from './ObservableLike.mjs';
import { add, bindTo, getException } from '../__internal__/util/DisposableLikeInternal.mjs';

const concat = concat$1;
const concatT = {
    concat,
};
const decodeWithCharset = decodeWithCharset$1;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = { distinctUntilChanged };
const forEach = forEach$1;
const forEachT = { forEach };
const forkMerge = forkMerge$1;
const keep = keep$1;
const keepT = { keep };
const map = map$1;
const mapT = { map };
const merge = merge$1;
const mergeT = {
    concat: merge,
};
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
const takeUntil = takeUntil$1;
const takeWhile = takeWhile$1;
const takeWhileT = { takeWhile };
const throwIfEmpty = throwIfEmpty$1;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toFlowable = () => observable => createLiftedFlowable((modeObs) => createObservable(observer => {
    const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil$1(pipe(pausableScheduler, toObservable())))), add(pipe(modeObs, forEach((mode) => {
        switch (mode) {
            case "pause":
                pause(pausableScheduler);
                break;
            case "resume":
                resume(pausableScheduler);
                break;
        }
    }), subscribe(getScheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
}));
const toFlowableT = { toFlowable };
const toReadonlyArray = (options = {}) => observable => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const result = [];
    const subscription = pipe(observable, forEach(next => {
        result.push(next);
    }), subscribe(scheduler));
    run(scheduler);
    const exception = getException(subscription);
    if (isSome(exception)) {
        throw exception.cause;
    }
    return result;
};
const toReadonlyArrayT = { toReadonlyArray };

export { concat, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, forEach, forEachT, forkMerge, keep, keepT, map, mapT, merge, mergeT, pairwise, pairwiseT, reduce, reduceT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toFlowable, toFlowableT, toReadonlyArray, toReadonlyArrayT };
