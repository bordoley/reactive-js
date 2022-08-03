/// <reference types="./RunnableObservableLike.d.ts" />
import { pipe, isSome } from '../functions.mjs';
import { createHotObservable } from '../rx.mjs';
import { createVirtualTimeScheduler } from '../scheduling.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { toPausableScheduler } from '../scheduling/SchedulerLike.mjs';
import { createLiftedFlowable } from '../streaming.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { toObservable } from '../util/DisposableLike.mjs';
import { resume, pause } from '../util/PauseableLike.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';
import { concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, subscribeOn, takeUntil, subscribe } from './ObservableLike.mjs';
import { add, bindTo, getException } from '../__internal__/util/DisposableLikeInternal.mjs';

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
const switchAllT = {
    concatAll: switchAll,
};
const takeFirstT = { takeFirst };
const takeLastT = { takeLast };
const takeWhileT = { takeWhile };
const throwIfEmptyT = {
    throwIfEmpty,
};
const toFlowable = () => observable => createLiftedFlowable((modeObs) => createHotObservable(observer => {
    const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil(pipe(pausableScheduler, toObservable())))), add(pipe(modeObs, forEach((mode) => {
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
const toHotObservable = () => v => v;
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

export { concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toFlowable, toFlowableT, toHotObservable, toReadonlyArray, toReadonlyArrayT };
