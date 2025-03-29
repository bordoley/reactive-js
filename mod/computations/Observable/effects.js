/// <reference types="./effects.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, StreamableLike_stream, } from "../../computations.js";
import { isSome, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { EventListenerLike_notify, SchedulerLike_schedule, SinkLike_complete, } from "../../utils.js";
import * as Source from "../Source.js";
import * as Streamable from "../Streamable.js";
import * as DeferredSource from "../__internal__/DeferredSource.js";
import { ComputeContext_awaitOrObserve, ComputeContext_constant, ComputeContext_memoOrUse, ComputeContext_observableConfig, ComputeContext_observer, assertCurrentContext, } from "./__private__/Observable.compute.js";
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
const createSynchronousObservableWithSideEffects = (f) => DeferredSource.create(f, {
    [ComputationLike_isSynchronous]: true,
    [ComputationLike_isPure]: false,
});
const createDeferredbservableWithSideEffects = (f) => DeferredSource.create(f, {
    [ComputationLike_isSynchronous]: false,
    [ComputationLike_isPure]: false,
});
export const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (create, f, ...args) => create(observer => {
        const callback = () => {
            f(...args);
            observer[EventListenerLike_notify](none);
            observer[SinkLike_complete]();
        };
        pipe(observer[SchedulerLike_schedule](callback), Disposable.addTo(observer));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = ctx[ComputeContext_observer];
        const observableConfig = ctx[ComputeContext_observableConfig];
        const observable = ctx[ComputeContext_memoOrUse](false, deferSideEffect, observableConfig[ComputationLike_isSynchronous]
            ? createSynchronousObservableWithSideEffects
            : createDeferredbservableWithSideEffects, f, ...args);
        const schedulerOption = __constant({ scheduler }, scheduler);
        const subscribeOnScheduler = ctx[ComputeContext_memoOrUse](false, Source.subscribe, schedulerOption);
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
    const streamOnSchedulerFactory = (streamable, scheduler, autoDispose, capacity, backpressureStrategy) => streamable[StreamableLike_stream](scheduler, {
        autoDispose,
        backpressureStrategy,
        capacity,
    });
    return (streamable, { autoDispose, backpressureStrategy, capacity, scheduler, } = {}) => {
        const currentScheduler = __currentScheduler();
        return __using(streamOnSchedulerFactory, streamable, scheduler ?? currentScheduler, autoDispose, capacity, backpressureStrategy);
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
