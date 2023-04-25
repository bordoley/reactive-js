/// <reference types="./effects.d.ts" />

import { __ComputeContext_awaitOrObserve, __ComputeContext_memoOrUse, __ComputeContext_observableConfig, __ComputeContext_observer, } from "../__internal__/symbols.js";
import { bind, bindMethod, isSome, none, pipe, } from "../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObserverLike_notify, } from "../rx.js";
import { SchedulerLike_schedule } from "../scheduling.js";
import { StreamableLike_stream } from "../streaming.js";
import Streamable_createStateStore from "../streaming/Streamable/__internal__/Streamable.createStateStore.js";
import { DisposableLike_dispose, } from "../util.js";
import Disposable_addTo from "../util/Disposable/__internal__/Disposable.addTo.js";
import Enumerable_create from "./Enumerable/__internal__/Enumerable.create.js";
import { assertCurrentContext } from "./Observable/__internal__/Observable.compute.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Runnable_create from "./Runnable/__internal__/Runnable.create.js";
export const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_memoOrUse](false, f, ...args);
};
export const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_awaitOrObserve](observable, true);
};
export const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_awaitOrObserve](observable, false);
};
export const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (create, f, ...args) => create(observer => {
        const callback = () => {
            f(...args);
            observer[ObserverLike_notify](none);
            observer[DisposableLike_dispose]();
        };
        pipe(observer[SchedulerLike_schedule](callback), Disposable_addTo(observer));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = ctx[__ComputeContext_observer];
        const observableConfig = ctx[__ComputeContext_observableConfig];
        const observable = ctx[__ComputeContext_memoOrUse](false, deferSideEffect, observableConfig[ObservableLike_isEnumerable]
            ? Enumerable_create
            : observableConfig[ObservableLike_isRunnable]
                ? Runnable_create
                : Observable_create, f, ...args);
        const subscribeOnScheduler = ctx[__ComputeContext_memoOrUse](false, Observable_subscribe, scheduler);
        ctx[__ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
export const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_memoOrUse](true, f, ...args);
};
export function __currentScheduler() {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_observer];
}
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
        const streamable = __memo(Streamable_createStateStore, initialState, optionsMemo);
        return __stream(streamable, options);
    };
})();
// eslint-disable-next-line @typescript-eslint/ban-types
export const __bind = (f, thiz) => __memo(bind, f, thiz);
// eslint-disable-next-line @typescript-eslint/ban-types
export const __bindMethod = (thiz, key) => __memo(bindMethod, thiz, key);
