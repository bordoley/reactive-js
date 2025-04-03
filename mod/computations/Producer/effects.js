/// <reference types="./effects.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../computations.js";
import { bindMethod, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import { EventListenerLike_notify, SchedulerLike_schedule, SinkLike_complete, } from "../../utils.js";
import * as Computation from "../Computation.js";
import * as EventSource from "../EventSource.js";
import * as DeferredEventSource from "../__internal__/DeferredEventSource.js";
import { ProducerComputeContext_awaitOrObserve, ProducerComputeContext_constant, ProducerComputeContext_memoOrUse, assertCurrentContext, } from "./__private__/Producer.compute.js";
export const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ProducerComputeContext_memoOrUse](false, f, ...args);
};
export const __await = (src) => {
    const ctx = assertCurrentContext();
    const producer = Computation.isDeferred(src)
        ? src
        : DeferredEventSource.create(bindMethod(src, EventSourceLike_subscribe), {
            [ComputationLike_isPure]: src[ComputationLike_isPure],
            [ComputationLike_isSynchronous]: false,
        });
    return ctx[ProducerComputeContext_awaitOrObserve](producer, true);
};
export const __constant = (value, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ProducerComputeContext_constant](value, ...args);
};
export const __subscribe = (src) => {
    const ctx = assertCurrentContext();
    const producer = Computation.isDeferred(src)
        ? src
        : DeferredEventSource.create(bindMethod(src, EventSourceLike_subscribe), {
            [ComputationLike_isPure]: src[ComputationLike_isPure],
            [ComputationLike_isSynchronous]: false,
        });
    return ctx[ProducerComputeContext_awaitOrObserve](producer, false);
};
export const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (create, f, ...args) => create(observer => {
        const callback = function* () {
            f(...args);
            observer[EventListenerLike_notify](none);
            observer[SinkLike_complete]();
        };
        pipe(observer[SchedulerLike_schedule](callback), Disposable.addTo(observer));
    });
    const createProducerWithSideEffects = (f) => DeferredEventSource.create(f, {
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: false,
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const observable = ctx[ProducerComputeContext_memoOrUse](false, deferSideEffect, createProducerWithSideEffects, f, ...args);
        const subscribeOnScheduler = ctx[ProducerComputeContext_memoOrUse](false, EventSource.subscribe);
        ctx[ProducerComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
export const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ProducerComputeContext_memoOrUse](true, f, ...args);
};
