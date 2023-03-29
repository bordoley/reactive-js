/// <reference types="./Observable.compute.d.ts" />

var _a, _b, _c, _d;
import { AwaitOrObserveEffect_hasValue, AwaitOrObserveEffect_observable, AwaitOrObserveEffect_subscription, AwaitOrObserveEffect_value, ComputeContext_awaitOrObserve, ComputeContext_cleanup, ComputeContext_effects, ComputeContext_index, ComputeContext_memoOrUse, ComputeContext_mode, ComputeContext_observer, ComputeContext_runComputation, ComputeContext_scheduledComputationSubscription, ComputeEffect_type, MemoOrUsingEffect_args, MemoOrUsingEffect_func, MemoOrUsingEffect_value, } from "../../../__internal__/symbols.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { arrayEquality, bind, bindMethod, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseWithDebugMessage, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Streamable_createStateStore from "../../../streaming/Streamable/__internal__/Streamable.createStateStore.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Observable_create from "./Observable.create.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_subscribeWithDispatcherConfig from "./Observable.subscribeWithDispatcherConfig.js";
const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const validateComputeEffect = ((ctx, type) => {
    const { [ComputeContext_effects]: effects, [ComputeContext_index]: index } = ctx;
    ctx[ComputeContext_index]++;
    const effect = effects[index];
    if (isSome(effect) && effect[ComputeEffect_type] === type) {
        return effect;
    }
    else {
        if (isSome(effect) &&
            (effect[ComputeEffect_type] === Await ||
                effect[ComputeEffect_type] === Observe)) {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
        }
        const newEffect = type === Memo
            ? {
                [ComputeEffect_type]: type,
                [MemoOrUsingEffect_func]: ignore,
                [MemoOrUsingEffect_args]: [],
                [MemoOrUsingEffect_value]: none,
            }
            : type === Await || type === Observe
                ? {
                    [ComputeEffect_type]: type,
                    [AwaitOrObserveEffect_observable]: Observable_empty(),
                    [AwaitOrObserveEffect_subscription]: Disposable_disposed,
                    [AwaitOrObserveEffect_value]: none,
                    [AwaitOrObserveEffect_hasValue]: false,
                }
                : type === Using
                    ? {
                        [ComputeEffect_type]: type,
                        [MemoOrUsingEffect_func]: ignore,
                        [MemoOrUsingEffect_args]: [],
                        [MemoOrUsingEffect_value]: Disposable_disposed,
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
    constructor(observer, runComputation, mode) {
        this[_a] = 0;
        this[_b] = [];
        this[_c] = Disposable_disposed;
        this[_d] = () => {
            const { [ComputeContext_effects]: effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => (effect[ComputeEffect_type] === Await ||
                effect[ComputeEffect_type] === Observe) &&
                !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
            if (!hasOutstandingEffects &&
                this[ComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
                this[ComputeContext_observer][DisposableLike_dispose]();
            }
        };
        this[ComputeContext_observer] = observer;
        this[ComputeContext_runComputation] = runComputation;
        this[ComputeContext_mode] = mode;
    }
    [(_a = ComputeContext_index, _b = ComputeContext_effects, _c = ComputeContext_scheduledComputationSubscription, _d = ComputeContext_cleanup, ComputeContext_awaitOrObserve)](observable, shouldAwait) {
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        if (effect[AwaitOrObserveEffect_observable] === observable) {
            return effect[AwaitOrObserveEffect_value];
        }
        else {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            const { [ComputeContext_observer]: observer, [ComputeContext_runComputation]: runComputation, } = this;
            const subscription = pipe(observable, Observable_forEach(next => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[ComputeContext_mode] === "combine-latest") {
                    runComputation();
                }
                else {
                    let { [ComputeContext_scheduledComputationSubscription]: scheduledComputationSubscription, } = this;
                    this[ComputeContext_scheduledComputationSubscription] =
                        scheduledComputationSubscription[DisposableLike_isDisposed]
                            ? pipe(observer, Observer_schedule(runComputation))
                            : scheduledComputationSubscription;
                }
            }), Observable_subscribeWithDispatcherConfig(observer), Disposable_addTo(observer), Disposable_onComplete(this[ComputeContext_cleanup]));
            effect[AwaitOrObserveEffect_observable] = observable;
            effect[AwaitOrObserveEffect_subscription] = subscription;
            effect[AwaitOrObserveEffect_value] = none;
            effect[AwaitOrObserveEffect_hasValue] = false;
            return shouldAwait ? raiseError(awaiting) : none;
        }
    }
    [ComputeContext_memoOrUse](shouldUse, f, ...args) {
        const effect = shouldUse
            ? validateComputeEffect(this, Using)
            : validateComputeEffect(this, Memo);
        if (f === effect[MemoOrUsingEffect_func] &&
            arrayStrictEquality(args, effect[MemoOrUsingEffect_args])) {
            return effect[MemoOrUsingEffect_value];
        }
        else {
            if (shouldUse) {
                effect[MemoOrUsingEffect_value][DisposableLike_dispose]();
            }
            const value = f(...args);
            effect[MemoOrUsingEffect_func] = f;
            effect[MemoOrUsingEffect_args] = args;
            effect[MemoOrUsingEffect_value] = value;
            if (shouldUse) {
                pipe(value, Disposable_addTo(this[ComputeContext_observer]));
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
        const { [ComputeContext_effects]: effects } = ctx;
        if (ReadonlyArray_getLength(effects) > ctx[ComputeContext_index]) {
            const effectsLength = effects.length;
            for (let i = ctx[ComputeContext_index]; i < effectsLength; i++) {
                const effect = ctx[ComputeContext_effects][i];
                if (effect[ComputeEffect_type] === Await ||
                    effect[ComputeEffect_type] === Observe) {
                    effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
                }
            }
        }
        ctx[ComputeContext_effects].length = ctx[ComputeContext_index];
        currentCtx = none;
        ctx[ComputeContext_index] = 0;
        const effectsLength = ReadonlyArray_getLength(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { [ComputeEffect_type]: type } = effect;
            if ((type === Await || type === Observe) &&
                !effect[AwaitOrObserveEffect_hasValue]) {
                allObserveEffectsHaveValues = false;
            }
            if ((type === Await || type === Observe) &&
                !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) {
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
    pipe(observer, Observer_schedule(runComputation));
});
export const Observable_compute__memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_memoOrUse](false, f, ...args);
};
export const Observable_compute__await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_awaitOrObserve](observable, true);
};
export const Observable_compute__observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_awaitOrObserve](observable, false);
};
export const Observable_compute__do = /*@__PURE__*/ (() => {
    const deferSideEffect = (f, ...args) => Observable_create(observer => {
        const callback = () => {
            f(...args);
            observer[ObserverLike_notify](none);
            observer[DisposableLike_dispose]();
        };
        pipe(observer, Observer_schedule(callback));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = ctx[ComputeContext_observer][DispatcherLike_scheduler];
        const observable = ctx[ComputeContext_memoOrUse](false, deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx[ComputeContext_memoOrUse](false, Observable_subscribe, scheduler);
        ctx[ComputeContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
export const Observable_compute__using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_memoOrUse](true, f, ...args);
};
export function Observable_compute__currentScheduler() {
    const ctx = assertCurrentContext();
    return ctx[ComputeContext_observer][DispatcherLike_scheduler];
}
export const Observable_compute__stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay, capacity, backpressureStrategy) => streamable[StreamableLike_stream](scheduler, {
        replay,
        backpressureStrategy,
        capacity,
    });
    return (streamable, { replay, backpressureStrategy, capacity, scheduler, } = {}) => {
        const currentScheduler = Observable_compute__currentScheduler();
        return Observable_compute__using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay, capacity, backpressureStrategy);
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
