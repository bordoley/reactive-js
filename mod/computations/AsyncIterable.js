/// <reference types="./AsyncIterable.d.ts" />

import { Array_push, Iterator_done, Iterator_next, Iterator_value, } from "../__internal__/constants.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, } from "../computations.js";
import { bindMethod, error, newInstance, none, pipe, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import * as PauseableObservable from "./PauseableObservable.js";
class FromIterableAsyncIterable {
    s;
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
export const fromIterable = 
/*@__PURE__*/
returns(arr => newInstance(FromIterableAsyncIterable, arr));
class FromReadonlyArrayAsyncIterable {
    arr;
    count;
    start;
    [ComputationLike_isSynchronous] = false;
    constructor(arr, count, start) {
        this.arr = arr;
        this.count = count;
        this.start = start;
    }
    async *[Symbol.asyncIterator]() {
        let { arr, start, count } = this;
        while (count !== 0) {
            const next = arr[start];
            yield next;
            count > 0 ? (start++, count--) : (start--, count++);
        }
    }
}
export const fromReadonlyArray = (options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayAsyncIterable, arr, count, start);
};
export const fromValue = 
/*@__PURE__*/
returns(v => fromReadonlyArray()([v]));
class GeneratorAsyncIterable {
    generator;
    initialValue;
    count;
    [ComputationLike_isSynchronous] = false;
    constructor(generator, initialValue, count) {
        this.generator = generator;
        this.initialValue = initialValue;
        this.count = count;
    }
    async *[Symbol.asyncIterator]() {
        const { count, generator } = this;
        let acc = this.initialValue();
        for (let cnt = 0; count === none || cnt < count; cnt++) {
            acc = generator(acc);
            yield acc;
        }
    }
}
export const generate = (generator, initialValue, options) => newInstance(GeneratorAsyncIterable, generator, initialValue, options?.count);
class KeepAsyncIterable {
    d;
    p;
    [ComputationLike_isPure];
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
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(d, m) {
        this.d = d;
        this.m = m;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
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
