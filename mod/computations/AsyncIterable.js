/// <reference types="./AsyncIterable.d.ts" />

import { Array_map, Array_push, Iterator_done, Iterator_next, Iterator_value, MAX_SAFE_INTEGER, } from "../__internal__/constants.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, } from "../computations.js";
import { alwaysTrue, bindMethod, error, invoke, isFunction, isNone, isSome, newInstance, none, pick, pipe, pipeSome, raiseError, returns, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SinkLike_complete, } from "../utils.js";
import * as Broadcaster from "./Broadcaster.js";
import * as ComputationM from "./Computation.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
export const broadcast = (options) => (iterable) => Broadcaster.createPauseable((modeObs) => pipe(Broadcaster.create((sink) => {
    const scheduler = options?.scheduler;
    const iterator = iterable[Symbol.asyncIterator]();
    const maxYieldInterval = scheduler?.[SchedulerLike_maxYieldInterval] ?? MAX_SAFE_INTEGER;
    let isPaused = true;
    const continuation = async () => {
        const startTime = scheduler?.[SchedulerLike_now] ?? 0;
        try {
            while (!sink[DisposableLike_isDisposed] &&
                !isPaused &&
                (scheduler?.[SchedulerLike_now] ?? 0) - startTime <
                    maxYieldInterval) {
                const next = await iterator[Iterator_next]();
                if (next[Iterator_done]) {
                    sink[SinkLike_complete]();
                    break;
                }
                else {
                    const v = next[Iterator_value];
                    sink[EventListenerLike_notify](v);
                }
            }
        }
        catch (e) {
            sink[DisposableLike_dispose](error(e));
        }
        pipeSome(!isPaused ? scheduler : none, invoke(SchedulerLike_schedule, continuation), Disposable.addTo(sink));
    };
    pipe(modeObs, EventSource_addEventHandler((mode) => {
        const wasPaused = isPaused;
        isPaused = mode;
        if (!isPaused && wasPaused) {
            pipeSome(scheduler, invoke(SchedulerLike_schedule, continuation), Disposable.addTo(sink)) ?? continuation();
        }
    }), Disposable.addTo(sink), DisposableContainer.onComplete(bindMethod(sink, SinkLike_complete)));
}, options), Disposable.addToContainer(modeObs)));
class CatchErrorAsyncIterable {
    s;
    onError;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, onError, isPure) {
        this.s = s;
        this.onError = onError;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    async *[Symbol.asyncIterator]() {
        try {
            yield* this.s;
        }
        catch (e) {
            const err = error(e);
            let action = none;
            try {
                action = this.onError(err);
            }
            catch (e) {
                throw error([error(e), err]);
            }
            isSome(action) && (yield* action);
        }
    }
}
export const catchError = ((onError, options) => (iter) => newInstance(CatchErrorAsyncIterable, iter, onError, options?.innerType?.[ComputationLike_isPure] ?? true));
class ConcatAllAsyncIterable {
    s;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s, isPure) {
        this.s = s;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    async *[Symbol.asyncIterator]() {
        for await (const iter of this.s) {
            yield* iter;
        }
    }
}
export const concatAll = ((options) => (iterable) => newInstance(ConcatAllAsyncIterable, iterable, options?.innerType?.[ComputationLike_isPure] ?? true));
class ConcatAsyncIterable {
    s;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = ComputationM.areAllPure(s);
    }
    async *[Symbol.asyncIterator]() {
        for (const iter of this.s) {
            yield* iter;
        }
    }
}
export const concat = ((...iterables) => newInstance(ConcatAsyncIterable, iterables));
class FromAsyncFactoryIterable {
    f;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const result = await this.f();
        yield result;
    }
}
export const fromAsyncFactory = returns(factory => newInstance(FromAsyncFactoryIterable, factory));
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
export const fromReadonlyArray = ((options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayAsyncIterable, arr, count, start);
});
export const empty = (() => pipe([], fromReadonlyArray(), returns))();
class EncodeUtf8AsyncIterable {
    s;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const textEncoder = newInstance(TextEncoder);
        for await (const chunk of this.s) {
            yield textEncoder.encode(chunk);
        }
    }
}
export const encodeUtf8 = (() => (iterable) => newInstance(EncodeUtf8AsyncIterable, iterable));
export const firstAsync = /*@__PURE__*/ returns(async (iter) => {
    for await (const v of iter) {
        return v;
    }
    return none;
});
class ForEachAsyncIterable {
    d;
    ef;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, ef) {
        this.d = d;
        this.ef = ef;
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const effect = this.ef;
        for await (const v of delegate) {
            effect(v);
            yield v;
        }
    }
}
export const forEach = ((effect) => (iter) => newInstance(ForEachAsyncIterable, iter, effect));
export const fromValue = 
/*@__PURE__*/
returns(v => fromReadonlyArray()([v]));
class GenAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = true;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const iter = this.f();
        yield* iter;
    }
}
export const gen = ((factory) => newInstance((GenAsyncIterable), factory));
class GenWithSideEffectsAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = false;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const iter = this.f();
        yield* iter;
    }
}
export const genWithSideEffects = ((factory) => newInstance((GenWithSideEffectsAsyncIterable), factory));
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
export const lastAsync = /*@__PURE__*/ returns(async (iter) => {
    let result = none;
    for await (const v of iter) {
        result = v;
    }
    return result;
});
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
class ScanAsyncIterable {
    s;
    r;
    iv;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, r, iv) {
        this.s = s;
        this.r = r;
        this.iv = iv;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const reducer = this.r;
        let acc = this.iv();
        for await (const v of this.s) {
            acc = reducer(acc, v);
            yield acc;
        }
    }
}
class RaiseAsyncIterable {
    r;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(r) {
        this.r = r;
    }
    async *[Symbol.asyncIterator]() {
        raiseError(error(this.r()));
    }
}
export const raise = ((options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((RaiseAsyncIterable), factory);
});
export const reduceAsync = (reducer, initialValue) => async (iterable) => {
    let acc = initialValue();
    for await (let v of iterable) {
        acc = reducer(acc, v);
    }
    return acc;
};
class RepeatAsyncIterable {
    i;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            yield* iterable;
            cnt++;
            if (!predicate(cnt)) {
                break;
            }
        }
    }
}
export const repeat = ((predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (src) => newInstance(RepeatAsyncIterable, src, repeatPredicate);
});
class RetryAsyncIterable {
    i;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            try {
                yield* iterable;
            }
            catch (e) {
                cnt++;
                if (!predicate(cnt, error(e))) {
                    break;
                }
            }
        }
    }
}
export const retry = ((shouldRetry) => (deferable) => newInstance(RetryAsyncIterable, deferable, shouldRetry ?? alwaysTrue));
export const scan = ((scanner, initialValue) => (iter) => newInstance(ScanAsyncIterable, iter, scanner, initialValue));
class TakeFirstAsyncIterable {
    s;
    c;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const takeCount = this.c;
        let count = 0;
        for await (const v of this.s) {
            if (count < takeCount) {
                yield v;
            }
            else {
                break;
            }
            count++;
        }
    }
}
export const takeFirst = ((options) => (iterable) => newInstance(TakeFirstAsyncIterable, iterable, clampPositiveInteger(options?.count ?? 1)));
class TakeWhileAsyncIterable {
    s;
    p;
    i;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, p, i) {
        this.s = s;
        this.p = p;
        this.i = i;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const predicate = this.p;
        const inclusive = this.i;
        for await (const next of this.s) {
            const satisfiesPredicate = predicate(next);
            if (satisfiesPredicate || inclusive) {
                yield next;
            }
            if (!satisfiesPredicate) {
                break;
            }
        }
    }
}
export const takeWhile = ((predicate, options) => (iterable) => newInstance(TakeWhileAsyncIterable, iterable, predicate, options?.inclusive ?? false));
class ThrowIfEmptyAsyncIterable {
    i;
    f;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, f) {
        this.i = i;
        this.f = f;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        let isEmpty = true;
        for await (const v of this.i) {
            isEmpty = false;
            yield v;
        }
        if (isEmpty) {
            raiseError(error(this.f()));
        }
    }
}
export const throwIfEmpty = ((factory) => (iter) => newInstance(ThrowIfEmptyAsyncIterable, iter, factory));
export const toObservable = Observable_fromAsyncIterable;
export const toReadonlyArrayAsync = 
/*@__PURE__*/
returns(async (iter) => {
    const result = [];
    for await (const v of iter) {
        result[Array_push](v);
    }
    return result;
});
class ZipAsyncIterable {
    iters;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(iters) {
        this.iters = iters;
        this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
    }
    async *[Symbol.asyncIterator]() {
        const iterators = this.iters[Array_map](invoke(Symbol.asyncIterator));
        while (true) {
            const next = await Promise.all(iterators[Array_map](invoke(Iterator_next)));
            if (next.some(x => x[Iterator_done] ?? false)) {
                break;
            }
            yield next[Array_map](pick(Iterator_value));
        }
    }
}
export const zip = ((...iters) => newInstance(ZipAsyncIterable, iters));
