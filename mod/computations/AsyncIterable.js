/// <reference types="./AsyncIterable.d.ts" />

import { Array_push, Iterator_done, Iterator_next, Iterator_value, } from "../__internal__/constants.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, } from "../computations.js";
import { bindMethod, error, newInstance, pipe, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import * as PauseableObservable from "./PauseableObservable.js";
class FromReadonlyArrayAsyncIterable {
    s;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(s) {
        this.s = s;
    }
    async *[Symbol.asyncIterator]() {
        for (const v of this.s) {
            yield v;
        }
    }
}
export const fromReadonlyArray = 
/*@__PURE__*/
returns(arr => newInstance(FromReadonlyArrayAsyncIterable, arr));
class KeepAsyncIterable {
    d;
    p;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, p) {
        this.d = d;
        this.p = p;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const predicate = this.p;
        for await (const v of delegate) {
            if (predicate(v)) {
                yield v;
            }
        }
    }
}
export const keep = ((predicate) => (iterable) => newInstance(KeepAsyncIterable, iterable, predicate));
class MapAsyncIterable {
    d;
    m;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, m) {
        this.d = d;
        this.m = m;
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const mapper = this.m;
        for await (const v of delegate) {
            yield mapper(v);
        }
    }
}
export const map = ((mapper) => (iter) => newInstance(MapAsyncIterable, iter, mapper));
class AsyncIterableOf {
    d;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d) {
        this.d = d;
    }
    [Symbol.asyncIterator]() {
        return this.d[Symbol.asyncIterator]();
    }
}
export const of = /*@__PURE__*/ returns(iter => newInstance(AsyncIterableOf, iter));
export const toObservable = Observable_fromAsyncIterable;
export const toPauseableObservable = (scheduler, options) => (iterable) => PauseableObservable.create((modeObs) => pipe(Observable_create((observer) => {
    const iterator = iterable[Symbol.asyncIterator]();
    const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];
    let isPaused = true;
    const continuation = async () => {
        const startTime = observer[SchedulerLike_now];
        try {
            while (!observer[DisposableLike_isDisposed] &&
                !isPaused &&
                observer[SchedulerLike_now] - startTime < maxYieldInterval) {
                const next = await iterator[Iterator_next]();
                if (next[Iterator_done]) {
                    observer[DispatcherLike_complete]();
                    break;
                }
                else if (!observer[QueueableLike_enqueue](next[Iterator_value])) {
                    // An async iterable can produce resolved promises which are immediately
                    // scheduled on the microtask queue. This prevents the observer's scheduler
                    // from running and draining dispatched events.
                    //
                    // Check the observer's buffer size so we can avoid queueing forever
                    // in this situation.
                    break;
                }
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
        }
        if (!isPaused) {
            pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
        }
    };
    pipe(modeObs, EventSource_addEventHandler((mode) => {
        const wasPaused = isPaused;
        isPaused = mode;
        if (!isPaused && wasPaused) {
            pipe(observer[SchedulerLike_schedule](continuation), Disposable.addTo(observer));
        }
    }), Disposable.addTo(observer), DisposableContainer.onComplete(bindMethod(observer, DispatcherLike_complete)));
}), Observable_multicast(scheduler, options), Disposable.addToContainer(modeObs)));
export const toReadonlyArrayAsync = 
/*@__PURE__*/
returns(async (iter) => {
    const result = [];
    for await (const v of iter) {
        result[Array_push](v);
    }
    return result;
});
