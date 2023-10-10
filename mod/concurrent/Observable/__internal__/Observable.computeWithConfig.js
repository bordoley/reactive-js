/// <reference types="./Observable.computeWithConfig.d.ts" />

import { CollectionLike_count, KeyedCollectionLike_get, } from "../../../collections.js";
import * as IndexedCollection from "../../../collections/IndexedCollection.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, ReplayObservableLike_buffer, SchedulerLike_schedule, } from "../../../concurrent.js";
import { arrayEquality, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseWithDebugMessage, } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, SinkLike_notify, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_empty from "./Observable.empty.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isReplayObservable from "./Observable.isReplayObservable.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const Constant = 5;
const AwaitOrObserveEffect_hasValue = Symbol("AwaitOrObserveEffect_hasValue");
const AwaitOrObserveEffect_observable = Symbol("AwaitOrObserveEffect_observable");
const AwaitOrObserveEffect_subscription = Symbol("AwaitOrObserveEffect_subscription");
const AwaitOrObserveEffect_value = Symbol("AwaitOrObserveEffect_value");
export const ComputeContext_awaitOrObserve = Symbol("ComputeContext_awaitOrObserve");
const ComputeContext_cleanup = Symbol("ComputeContext_cleanup");
export const ComputeContext_constant = Symbol("ComputeContext_constant");
const ComputeContext_effects = Symbol("ComputeContext_effects");
const ComputeContext_index = Symbol("ComputeContext_index");
export const ComputeContext_memoOrUse = Symbol("ComputeContext_memoOrUse");
const ComputeContext_mode = Symbol("ComputeContext_mode");
export const ComputeContext_observableConfig = Symbol("ComputeContext_observableConfig");
export const ComputeContext_observer = Symbol("ComputeContext_observer");
const ComputeContext_runComputation = Symbol("ComputeContext_runComputation");
const ComputeContext_scheduledComputationSubscription = Symbol("ComputeContext_scheduledComputationSubscription");
const ComputeEffect_type = Symbol("ComputeEffect_type");
const ConstantEffect_args = Symbol("ConstantEffect_args");
const ConstantEffect_value = Symbol("ConstantEffect_value");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");
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
                    [AwaitOrObserveEffect_subscription]: Disposable.disposed,
                    [AwaitOrObserveEffect_value]: none,
                    [AwaitOrObserveEffect_hasValue]: false,
                }
                : type === Using
                    ? {
                        [ComputeEffect_type]: type,
                        [MemoOrUsingEffect_func]: ignore,
                        [MemoOrUsingEffect_args]: [],
                        [MemoOrUsingEffect_value]: Disposable.disposed,
                    }
                    : type === Constant
                        ? {
                            [ComputeEffect_type]: type,
                            [ConstantEffect_value]: none,
                            [ConstantEffect_args]: [],
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
    [ComputeContext_index] = 0;
    [ComputeContext_effects] = [];
    [ComputeContext_observableConfig];
    [ComputeContext_observer];
    [ComputeContext_scheduledComputationSubscription] = Disposable.disposed;
    [ComputeContext_runComputation];
    [ComputeContext_mode];
    [ComputeContext_cleanup] = () => {
        const { [ComputeContext_effects]: effects } = this;
        const hasOutstandingEffects = effects.findIndex(effect => (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
            !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
        if (!hasOutstandingEffects &&
            this[ComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
            this[ComputeContext_observer][DisposableLike_dispose]();
        }
    };
    constructor(observer, runComputation, mode, config) {
        this[ComputeContext_observer] = observer;
        this[ComputeContext_runComputation] = runComputation;
        this[ComputeContext_mode] = mode;
        this[ComputeContext_observableConfig] = config;
    }
    [ComputeContext_awaitOrObserve](observable, shouldAwait) {
        if (this[ComputeContext_observableConfig][ObservableLike_isRunnable] &&
            !observable[ObservableLike_isRunnable]) {
            raiseWithDebugMessage("cannot observe a non-runnable observable in a Runnable computation");
        }
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        if (effect[AwaitOrObserveEffect_observable] === observable) {
            return effect[AwaitOrObserveEffect_value];
        }
        else {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            const { [ComputeContext_observer]: observer, [ComputeContext_runComputation]: runComputation, } = this;
            const subscription = pipe(observable, Observable_forEach((next) => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[ComputeContext_mode] === "combine-latest") {
                    runComputation();
                }
                else {
                    let { [ComputeContext_scheduledComputationSubscription]: scheduledComputationSubscription, } = this;
                    this[ComputeContext_scheduledComputationSubscription] =
                        scheduledComputationSubscription[DisposableLike_isDisposed]
                            ? pipe(observer[SchedulerLike_schedule](runComputation), Disposable.addTo(observer))
                            : scheduledComputationSubscription;
                }
            }), Observable_subscribeWithConfig(observer, observer), Disposable.addTo(observer), Disposable.onComplete(this[ComputeContext_cleanup]));
            const buffer = Observable_isReplayObservable(observable)
                ? observable[ReplayObservableLike_buffer]
                : IndexedCollection.empty();
            const hasDefaultValue = buffer[CollectionLike_count] > 0;
            const defaultValue = hasDefaultValue
                ? buffer[KeyedCollectionLike_get](0)
                : none;
            effect[AwaitOrObserveEffect_observable] = observable;
            effect[AwaitOrObserveEffect_subscription] = subscription;
            effect[AwaitOrObserveEffect_value] = defaultValue;
            effect[AwaitOrObserveEffect_hasValue] = hasDefaultValue;
            return shouldAwait && !hasDefaultValue
                ? raiseError(awaiting)
                : defaultValue;
        }
    }
    [ComputeContext_constant](value, ...args) {
        const effect = validateComputeEffect(this, Constant);
        if (isSome(effect[ConstantEffect_value]) &&
            arrayStrictEquality(args, effect[ConstantEffect_args])) {
            return effect[ConstantEffect_value];
        }
        else {
            effect[ConstantEffect_value] = value;
            effect[ConstantEffect_args] = args;
            return value;
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
                pipe(value, Disposable.addTo(this[ComputeContext_observer]));
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
        const { [ComputeContext_effects]: effects } = ctx;
        if (effects.length > ctx[ComputeContext_index]) {
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
        const effectsLength = effects.length;
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
            observer[SinkLike_notify](result);
        }
        if (shouldDispose) {
            observer[DisposableLike_dispose](err);
        }
    };
    const ctx = newInstance(ComputeContext, observer, runComputation, mode, config);
    pipe(observer[SchedulerLike_schedule](runComputation), Disposable.addTo(observer));
}, config));
export default Observable_computeWithConfig;
