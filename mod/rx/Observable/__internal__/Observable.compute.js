/// <reference types="./Observable.compute.d.ts" />

import { __AwaitOrObserveEffect_hasValue, __AwaitOrObserveEffect_observable, __AwaitOrObserveEffect_subscription, __AwaitOrObserveEffect_value, __ComputeContext_awaitOrObserve, __ComputeContext_cleanup, __ComputeContext_effects, __ComputeContext_index, __ComputeContext_memoOrUse, __ComputeContext_mode, __ComputeContext_observer, __ComputeContext_runComputation, __ComputeContext_scheduledComputationSubscription, __ComputeEffect_type, __MemoOrUsingEffect_args, __MemoOrUsingEffect_func, __MemoOrUsingEffect_value, } from "../../../__internal__/symbols.js";
import { arrayEquality, bind, bindMethod, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseWithDebugMessage, } from "../../../functions.js";
import ReadonlyArray_getLength from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { ObserverLike_notify, } from "../../../rx.js";
import { SchedulerLike_schedule } from "../../../scheduling.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Streamable_createStateStore from "../../../streaming/Streamable/__internal__/Streamable.createStateStore.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_create from "./Observable.create.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const validateComputeEffect = ((ctx, type) => {
    const { [__ComputeContext_effects]: effects, [__ComputeContext_index]: index, } = ctx;
    ctx[__ComputeContext_index]++;
    const effect = effects[index];
    if (isSome(effect) && effect[__ComputeEffect_type] === type) {
        return effect;
    }
    else {
        if (isSome(effect) &&
            (effect[__ComputeEffect_type] === Await ||
                effect[__ComputeEffect_type] === Observe)) {
            effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
        }
        const newEffect = type === Memo
            ? {
                [__ComputeEffect_type]: type,
                [__MemoOrUsingEffect_func]: ignore,
                [__MemoOrUsingEffect_args]: [],
                [__MemoOrUsingEffect_value]: none,
            }
            : type === Await || type === Observe
                ? {
                    [__ComputeEffect_type]: type,
                    [__AwaitOrObserveEffect_observable]: Observable_empty(),
                    [__AwaitOrObserveEffect_subscription]: Disposable_disposed,
                    [__AwaitOrObserveEffect_value]: none,
                    [__AwaitOrObserveEffect_hasValue]: false,
                }
                : type === Using
                    ? {
                        [__ComputeEffect_type]: type,
                        [__MemoOrUsingEffect_func]: ignore,
                        [__MemoOrUsingEffect_args]: [],
                        [__MemoOrUsingEffect_value]: Disposable_disposed,
                    }
                    : raiseWithDebugMessage("invalid effect type");
        if (isSome(effect)) {
            effects[index] = newEffect;
        }
        else {
            effects.push(newEffect);
        }
        return newEffect;
    }
});
const arrayStrictEquality = arrayEquality();
const awaiting = error();
class ComputeContext {
    [__ComputeContext_index] = 0;
    [__ComputeContext_effects] = [];
    [__ComputeContext_observer];
    [__ComputeContext_scheduledComputationSubscription] = Disposable_disposed;
    [__ComputeContext_runComputation];
    [__ComputeContext_mode];
    [__ComputeContext_cleanup] = () => {
        const { [__ComputeContext_effects]: effects } = this;
        const hasOutstandingEffects = effects.findIndex(effect => (effect[__ComputeEffect_type] === Await ||
            effect[__ComputeEffect_type] === Observe) &&
            !effect[__AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
        if (!hasOutstandingEffects &&
            this[__ComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
            this[__ComputeContext_observer][DisposableLike_dispose]();
        }
    };
    constructor(observer, runComputation, mode) {
        this[__ComputeContext_observer] = observer;
        this[__ComputeContext_runComputation] = runComputation;
        this[__ComputeContext_mode] = mode;
    }
    [__ComputeContext_awaitOrObserve](observable, shouldAwait) {
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        if (effect[__AwaitOrObserveEffect_observable] === observable) {
            return effect[__AwaitOrObserveEffect_value];
        }
        else {
            effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            const { [__ComputeContext_observer]: observer, [__ComputeContext_runComputation]: runComputation, } = this;
            const subscription = pipe(observable, Observable_forEach(next => {
                effect[__AwaitOrObserveEffect_value] = next;
                effect[__AwaitOrObserveEffect_hasValue] = true;
                if (this[__ComputeContext_mode] === "combine-latest") {
                    runComputation();
                }
                else {
                    let { [__ComputeContext_scheduledComputationSubscription]: scheduledComputationSubscription, } = this;
                    this[__ComputeContext_scheduledComputationSubscription] =
                        scheduledComputationSubscription[DisposableLike_isDisposed]
                            ? pipe(observer[SchedulerLike_schedule](runComputation), Disposable_addTo(observer))
                            : scheduledComputationSubscription;
                }
            }), Observable_subscribeWithConfig(observer, observer), Disposable_addTo(observer), Disposable_onComplete(this[__ComputeContext_cleanup]));
            effect[__AwaitOrObserveEffect_observable] = observable;
            effect[__AwaitOrObserveEffect_subscription] = subscription;
            effect[__AwaitOrObserveEffect_value] = none;
            effect[__AwaitOrObserveEffect_hasValue] = false;
            return shouldAwait ? raiseError(awaiting) : none;
        }
    }
    [__ComputeContext_memoOrUse](shouldUse, f, ...args) {
        const effect = shouldUse
            ? validateComputeEffect(this, Using)
            : validateComputeEffect(this, Memo);
        if (f === effect[__MemoOrUsingEffect_func] &&
            arrayStrictEquality(args, effect[__MemoOrUsingEffect_args])) {
            return effect[__MemoOrUsingEffect_value];
        }
        else {
            if (shouldUse) {
                effect[__MemoOrUsingEffect_value][DisposableLike_dispose]();
            }
            const value = f(...args);
            effect[__MemoOrUsingEffect_func] = f;
            effect[__MemoOrUsingEffect_args] = args;
            effect[__MemoOrUsingEffect_value] = value;
            if (shouldUse) {
                pipe(value, Disposable_addTo(this[__ComputeContext_observer]));
            }
            return value;
        }
    }
}
let currentCtx = none;
export const assertCurrentContext = () => isNone(currentCtx)
    ? raiseWithDebugMessage("effect must be called within a computational expression")
    : currentCtx;
export const Observable_compute = (computation, { mode = "batched" } = {}) => Observable_create((observer) => {
    const runComputation = () => {
        let result = none;
        let err = none;
        let isAwaiting = false;
        currentCtx = ctx;
        try {
            result = computation();
        }
        catch (e) {
            isAwaiting = e === awaiting;
            if (!isAwaiting) {
                err = error(e);
            }
        }
        const { [__ComputeContext_effects]: effects } = ctx;
        if (ReadonlyArray_getLength(effects) > ctx[__ComputeContext_index]) {
            const effectsLength = effects.length;
            for (let i = ctx[__ComputeContext_index]; i < effectsLength; i++) {
                const effect = ctx[__ComputeContext_effects][i];
                if (effect[__ComputeEffect_type] === Await ||
                    effect[__ComputeEffect_type] === Observe) {
                    effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
                }
            }
        }
        ctx[__ComputeContext_effects].length =
            ctx[__ComputeContext_index];
        currentCtx = none;
        ctx[__ComputeContext_index] = 0;
        const effectsLength = ReadonlyArray_getLength(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { [__ComputeEffect_type]: type } = effect;
            if ((type === Await || type === Observe) &&
                !effect[__AwaitOrObserveEffect_hasValue]) {
                allObserveEffectsHaveValues = false;
            }
            if ((type === Await || type === Observe) &&
                !effect[__AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) {
                hasOutstandingEffects = true;
            }
            if (!allObserveEffectsHaveValues && hasOutstandingEffects) {
                break;
            }
        }
        const combineLatestModeShouldNotify = mode === "combine-latest" &&
            allObserveEffectsHaveValues &&
            hasOutstandingEffects;
        const hasError = isSome(err);
        const shouldNotify = !hasError &&
            !isAwaiting &&
            (combineLatestModeShouldNotify || mode === "batched");
        const shouldDispose = !hasOutstandingEffects || hasError;
        if (shouldNotify) {
            observer[ObserverLike_notify](result);
        }
        if (shouldDispose) {
            observer[DisposableLike_dispose](err);
        }
    };
    const ctx = newInstance(ComputeContext, observer, runComputation, mode);
    pipe(observer[SchedulerLike_schedule](runComputation), Disposable_addTo(observer));
});
export const Observable_compute__memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_memoOrUse](false, f, ...args);
};
export const Observable_compute__await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_awaitOrObserve](observable, true);
};
export const Observable_compute__observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_awaitOrObserve](observable, false);
};
export const Observable_compute__do = /*@__PURE__*/ (() => {
    const deferSideEffect = (f, ...args) => Observable_create(observer => {
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
        const observable = ctx[__ComputeContext_memoOrUse](false, deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx[__ComputeContext_memoOrUse](false, Observable_subscribe, scheduler);
        ctx[__ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
export const Observable_compute__using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_memoOrUse](true, f, ...args);
};
export function Observable_compute__currentScheduler() {
    const ctx = assertCurrentContext();
    return ctx[__ComputeContext_observer];
}
export const Observable_compute__stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay, capacity, backpressureStrategy) => streamable[StreamableLike_stream](scheduler, {
        replay,
        backpressureStrategy,
        capacity,
    });
    return (streamable, { replay, backpressureStrategy, capacity, scheduler, } = {}) => {
        const currentScheduler = Observable_compute__currentScheduler();
        return Observable_compute__using(streamOnSchedulerFactory, streamable, scheduler ?? currentScheduler, replay, capacity, backpressureStrategy);
    };
})();
export const Observable_compute__state = /*@__PURE__*/ (() => {
    const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
    return (initialState, options = {}) => {
        const { equality } = options;
        const optionsMemo = Observable_compute__memo(createStateOptions, equality);
        const streamable = Observable_compute__memo(Streamable_createStateStore, initialState, optionsMemo);
        return Observable_compute__stream(streamable, options);
    };
})();
// eslint-disable-next-line @typescript-eslint/ban-types
export const Observable_compute__bind = (f, thiz) => Observable_compute__memo(bind, f, thiz);
// eslint-disable-next-line @typescript-eslint/ban-types
export const Observable_compute__bindMethod = (thiz, key) => Observable_compute__memo(bindMethod, thiz, key);
