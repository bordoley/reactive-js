/// <reference types="./RunnableObservableLike.d.ts" />
import { pipe } from '../functions.mjs';
import { createObservable } from '../rx.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { toPausableScheduler } from '../scheduling/SchedulerLike.mjs';
import { createLiftedFlowable } from '../streaming.mjs';
import { toObservable } from '../util/DisposableLike.mjs';
import { resume, pause } from '../util/PauseableLike.mjs';
import { sourceFrom } from '../util/SinkLike.mjs';
import { buffer, concat, decodeWithCharset, distinctUntilChanged, forEach, keep, map, merge, pairwise, reduce, scan, skipFirst, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, subscribeOn, takeUntil, subscribe, toReadonlyArray } from './ObservableLike.mjs';
import { add, bindTo } from '../__internal__/util/DisposableLikeInternal.mjs';

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
const toFlowable = () => observable => createLiftedFlowable((modeObs) => createObservable(observer => {
    const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
    pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil(pipe(pausableScheduler, toObservable())))), add(pipe(modeObs, forEach(mode => {
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
const toReadonlyArrayT = { toReadonlyArray };

export { bufferT, concatT, decodeWithCharsetT, distinctUntilChangedT, forEachT, keepT, mapT, mergeT, pairwiseT, reduceT, scanT, skipFirstT, switchAllT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toFlowable, toFlowableT, toReadonlyArrayT };
