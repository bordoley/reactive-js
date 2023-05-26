/// <reference types="./Observable.compute.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import IndexedCollection_empty from "../../IndexedCollection/__internal__/IndexedCollection.empty.js";
import Observable_isReplayObservable from "../../Observable/__internal__/Observable.isReplayObservable.js";
import ReadonlyArray_getLength from "../../ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { __AwaitOrObserveEffect_hasValue, __AwaitOrObserveEffect_observable, __AwaitOrObserveEffect_subscription, __AwaitOrObserveEffect_value, __ComputeContext_awaitOrObserve, __ComputeContext_cleanup, __ComputeContext_constant, __ComputeContext_effects, __ComputeContext_index, __ComputeContext_memoOrUse, __ComputeContext_mode, __ComputeContext_observableConfig, __ComputeContext_observer, __ComputeContext_runComputation, __ComputeContext_scheduledComputationSubscription, __ComputeEffect_type, __ConstantEffect_args, __ConstantEffect_value, __MemoOrUsingEffect_args, __MemoOrUsingEffect_func, __MemoOrUsingEffect_value, } from "../../__internal__/symbols.js";
import { arrayEquality, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseWithDebugMessage, } from "../../functions.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, KeyedCollectionLike_get, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ReplayObservableLike_buffer, SchedulerLike_schedule, SinkLike_notify, } from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const Constant = 5;
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
                    : type === Constant
                        ? {
                            [__ComputeEffect_type]: type,
                            [__ConstantEffect_value]: none,
                            [__ConstantEffect_args]: [],
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
const awaiting = /*@__PURE__*/ error();
class ComputeContext {
    [__ComputeContext_index] = 0;
    [__ComputeContext_effects] = [];
    [__ComputeContext_observableConfig];
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
    constructor(observer, runComputation, mode, config) {
        this[__ComputeContext_observer] = observer;
        this[__ComputeContext_runComputation] = runComputation;
        this[__ComputeContext_mode] = mode;
        this[__ComputeContext_observableConfig] = config;
    }
    [__ComputeContext_awaitOrObserve](observable, shouldAwait) {
        if (this[__ComputeContext_observableConfig][ObservableLike_isRunnable] &&
            !observable[ObservableLike_isRunnable]) {
            raiseWithDebugMessage("cannot observe a non-runnable observable in a Runnable computation");
        }
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        if (effect[__AwaitOrObserveEffect_observable] === observable) {
            return effect[__AwaitOrObserveEffect_value];
        }
        else {
            effect[__AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            const { [__ComputeContext_observer]: observer, [__ComputeContext_runComputation]: runComputation, } = this;
            const subscription = pipe(observable, Observable_forEach((next) => {
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
            const buffer = Observable_isReplayObservable(observable)
                ? observable[ReplayObservableLike_buffer]
                : IndexedCollection_empty();
            const hasDefaultValue = buffer[CollectionLike_count] > 0;
            const defaultValue = hasDefaultValue
                ? buffer[KeyedCollectionLike_get](0)
                : none;
            effect[__AwaitOrObserveEffect_observable] = observable;
            effect[__AwaitOrObserveEffect_subscription] = subscription;
            effect[__AwaitOrObserveEffect_value] = defaultValue;
            effect[__AwaitOrObserveEffect_hasValue] = hasDefaultValue;
            return shouldAwait && !hasDefaultValue
                ? raiseError(awaiting)
                : defaultValue;
        }
    }
    [__ComputeContext_constant](value, ...args) {
        const effect = validateComputeEffect(this, Constant);
        if (isSome(effect[__ConstantEffect_value]) &&
            arrayStrictEquality(args, effect[__ConstantEffect_args])) {
            return effect[__ConstantEffect_value];
        }
        else {
            effect[__ConstantEffect_value] = value;
            effect[__ConstantEffect_args] = args;
            return value;
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
const Observable_computeWithConfig = ((computation, config, { mode = "batched" } = {}) => Observable_createWithConfig((observer) => {
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
        ctx[__ComputeContext_effects].length = ctx[__ComputeContext_index];
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
            observer[SinkLike_notify](result);
        }
        if (shouldDispose) {
            observer[DisposableLike_dispose](err);
        }
    };
    const ctx = newInstance(ComputeContext, observer, runComputation, mode, config);
    pipe(observer[SchedulerLike_schedule](runComputation), Disposable_addTo(observer));
}, config));
export const Observable_compute = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
}, options);
export const Runnable_compute = (computation, options = {}) => Observable_computeWithConfig(computation, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: true,
}, options);
