/// <reference types="./Observable.compute.d.ts" />

import { Array_length, Array_push, __DEV__, } from "../../../__internal__/constants.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { arrayEquality, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseIf, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SchedulerLike_schedule, SinkLike_complete, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import Observable_forEach from "./Observable.forEach.js";
import { Observable_genPure } from "./Observable.gen.js";
export const BatchedComputeMode = "batched";
export const CombineLatestComputeMode = "combine-latest";
const m = Computation.makeModule()({
    genPure: Observable_genPure,
});
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
    const effects = ctx[ComputeContext_effects];
    const index = ctx[ComputeContext_index];
    const effect = effects[index];
    const newEffect = isSome(effect) && effect[ComputeEffect_type] === type
        ? effect
        : type === Memo
            ? {
                [ComputeEffect_type]: type,
                [MemoOrUsingEffect_func]: ignore,
                [MemoOrUsingEffect_args]: [],
                [MemoOrUsingEffect_value]: none,
            }
            : type === Await || type === Observe
                ? {
                    [ComputeEffect_type]: type,
                    [AwaitOrObserveEffect_observable]: Computation.empty(m)(),
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
                    : {
                        [ComputeEffect_type]: type,
                        [ConstantEffect_value]: none,
                        [ConstantEffect_args]: [],
                    };
    ctx[ComputeContext_index]++;
    if (isSome(effect) && newEffect !== effect) {
        if (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
        }
        effects[index] = newEffect;
    }
    else if (isNone(effect)) {
        effects[Array_push](newEffect);
    }
    return newEffect;
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
        const effects = this[ComputeContext_effects];
        const hasOutstandingEffects = effects.findIndex(effect => (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
            !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
        if (!hasOutstandingEffects &&
            this[ComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
            this[ComputeContext_observer][SinkLike_complete]();
        }
    };
    constructor(observer, runComputation, mode, config) {
        this[ComputeContext_observer] = observer;
        this[ComputeContext_runComputation] = runComputation;
        this[ComputeContext_mode] = mode;
        this[ComputeContext_observableConfig] = config;
    }
    [ComputeContext_awaitOrObserve](observable, shouldAwait) {
        if (__DEV__) {
            raiseIf((this[ComputeContext_observableConfig][ComputationLike_isSynchronous] ??
                true) &&
                !observable[ComputationLike_isSynchronous], "cannot observe a non-runnable observable in a SynchronousObservable computation");
        }
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        const observer = this[ComputeContext_observer];
        const runComputation = this[ComputeContext_runComputation];
        if (effect[AwaitOrObserveEffect_observable] === observable) {
            return effect[AwaitOrObserveEffect_value];
        }
        else {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            effect[AwaitOrObserveEffect_observable] = observable;
            effect[AwaitOrObserveEffect_value] = none;
            effect[AwaitOrObserveEffect_hasValue] = false;
            effect[AwaitOrObserveEffect_subscription] = pipe(observable, Observable_forEach((next) => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[ComputeContext_mode] === CombineLatestComputeMode) {
                    runComputation();
                }
                else {
                    const scheduledComputationSubscription = this[ComputeContext_scheduledComputationSubscription];
                    this[ComputeContext_scheduledComputationSubscription] =
                        scheduledComputationSubscription[DisposableLike_isDisposed]
                            ? pipe(observer[SchedulerLike_schedule](function* () {
                                runComputation();
                            }), Disposable.addTo(observer))
                            : scheduledComputationSubscription;
                }
            }), EventSource.subscribe({ scheduler: observer }), Disposable.addTo(observer), DisposableContainer.onComplete(this[ComputeContext_cleanup]));
            return shouldAwait ? raiseError(awaiting) : none;
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
export const assertCurrentContext = () => {
    if (__DEV__) {
        raiseIf(isNone(currentCtx), "effect must be called within a computational expression");
    }
    return currentCtx;
};
const Observable_compute = ((computation, config, { mode = BatchedComputeMode } = {}) => DeferredEventSource.create((observer) => {
    const runComputation = () => {
        let result = none;
        let err = none;
        let isAwaiting = false;
        currentCtx = ctx;
        try {
            // Explicitly reset the count before running the computation
            // for the combine-latest case where runComputation can
            // be invoked recursively on itself.
            ctx[ComputeContext_index] = 0;
            result = computation();
        }
        catch (e) {
            isAwaiting = e === awaiting;
            if (!isAwaiting) {
                err = error(e);
            }
        }
        const effects = ctx[ComputeContext_effects];
        if (effects[Array_length] > ctx[ComputeContext_index]) {
            const effectsLength = effects[Array_length];
            for (let i = ctx[ComputeContext_index]; i < effectsLength; i++) {
                const effect = ctx[ComputeContext_effects][i];
                if (effect[ComputeEffect_type] === Await ||
                    effect[ComputeEffect_type] === Observe) {
                    effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
                }
            }
        }
        ctx[ComputeContext_effects][Array_length] = ctx[ComputeContext_index];
        currentCtx = none;
        ctx[ComputeContext_index] = 0;
        const effectsLength = effects[Array_length];
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const type = effect[ComputeEffect_type];
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
        const combineLatestModeShouldNotify = mode === CombineLatestComputeMode && allObserveEffectsHaveValues;
        const hasError = isSome(err);
        const shouldNotify = !hasError &&
            !isAwaiting &&
            (combineLatestModeShouldNotify || mode === BatchedComputeMode);
        const shouldComplete = !hasOutstandingEffects;
        if (hasError) {
            observer[DisposableLike_dispose](err);
            return;
        }
        if (shouldNotify) {
            observer[EventListenerLike_notify](result);
        }
        if (shouldComplete) {
            observer[SinkLike_complete]();
        }
    };
    const ctx = newInstance(ComputeContext, observer, runComputation, mode, config);
    pipe(observer[SchedulerLike_schedule](function* () {
        runComputation();
    }), Disposable.addTo(observer));
}, config));
export const Observable_computeDeferred = (computation, options = {}) => Observable_compute(computation, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
}, options);
export const Observable_computeSynchronous = (computation, options = {}) => Observable_compute(computation, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: true,
}, options);
