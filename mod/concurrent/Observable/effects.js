/// <reference types="./effects.d.ts" />

import { ObservableLike_isRunnable, ObserverLike_notify, SchedulerLike_schedule, StreamableLike_stream, } from "../../concurrent.js";
import { bindMethod, isSome, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { DisposableLike_dispose, } from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import { ComputeContext_awaitOrObserve, ComputeContext_constant, ComputeContext_memoOrUse, ComputeContext_observableConfig, ComputeContext_observer, assertCurrentContext, } from "./__private__/Observable.computeWithConfig.js";
import Observable_createPureRunnableWithSideEffects from "./__private__/Observable.createRunnableWithSideEffects.js";
export const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_memoOrUse](false, f, ...args);
};
export const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_awaitOrObserve](observable, true);
};
export const __constant = (value, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_constant](value, ...args);
};
export const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_awaitOrObserve](observable, false);
};
export const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (create, f, ...args) => create(observer => {
        const callback = () => {
            f(...args);
            observer[ObserverLike_notify](none);
            observer[DisposableLike_dispose]();
        };
        pipe(observer[SchedulerLike_schedule](callback), Disposable.addTo(observer));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = ctx[ComputeContext_observer];
        const observableConfig = ctx[ComputeContext_observableConfig];
        const observable = ctx[ComputeContext_memoOrUse](false, deferSideEffect, observableConfig[ObservableLike_isRunnable]
            ? Observable_createPureRunnableWithSideEffects
            : Observable.create, f, ...args);
        const subscribeOnScheduler = ctx[ComputeContext_memoOrUse](false, Observable.subscribe, scheduler);
        ctx[ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
export const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_memoOrUse](true, f, ...args);
};
export const __currentScheduler = () => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_observer];
};
export const __stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay, capacity, backpressureStrategy) => streamable[StreamableLike_stream](scheduler, {
        replay,
        backpressureStrategy,
        capacity,
    });
    return (streamable, { replay, backpressureStrategy, capacity, scheduler, } = {}) => {
        const currentScheduler = __currentScheduler();
        return __using(streamOnSchedulerFactory, streamable, scheduler ?? currentScheduler, replay, capacity, backpressureStrategy);
    };
})();
export const __state = /*@__PURE__*/ (() => {
    const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
    return (initialState, options = {}) => {
        const { equality } = options;
        const optionsMemo = __memo(createStateOptions, equality);
        const streamable = __memo(Streamable.stateStore, initialState, optionsMemo);
        return __stream(streamable, options);
    };
})();
export const __bindMethod = (thiz, key) => __memo(bindMethod, thiz, key);
