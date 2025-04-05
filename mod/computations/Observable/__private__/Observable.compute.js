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
import { Observable_genPure } from "./Observable.gen.js";
export const BatchedComputeMode = "batched";
export const CombineLatestComputeMode = "combine-latest";
const m = Computation.makeModule({
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
export const ObservableComputeContext_awaitOrObserve = Symbol("ObservableComputeContext_awaitOrObserve");
const ObservableComputeContext_cleanup = Symbol("ObservableComputeContext_cleanup");
export const ObservableComputeContext_constant = Symbol("ObservableComputeContext_constant");
const ObservableComputeContext_effects = Symbol("ObservableComputeContext_effects");
const ObservableComputeContext_index = Symbol("ObservableComputeContext_index");
export const ObservableComputeContext_memoOrUse = Symbol("ObservableComputeContext_memoOrUse");
const ObservableComputeContext_mode = Symbol("ObservableComputeContext_mode");
export const ObservableComputeContext_observableConfig = Symbol("ObservableComputeContext_observableConfig");
export const ObservableComputeContext_observer = Symbol("ObservableComputeContext_observer");
const ObservableComputeContext_runComputation = Symbol("ObservableComputeContext_runComputation");
const ObservableComputeContext_scheduledComputationSubscription = Symbol("ObservableComputeContext_scheduledComputationSubscription");
const ComputeEffect_type = Symbol("ComputeEffect_type");
const ConstantEffect_args = Symbol("ConstantEffect_args");
const ConstantEffect_value = Symbol("ConstantEffect_value");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");
const validateComputeEffect = ((ctx, type) => {
    const effects = ctx[ObservableComputeContext_effects];
    const index = ctx[ObservableComputeContext_index];
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
                    [AwaitOrObserveEffect_observable]: Computation.empty(m),
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
    ctx[ObservableComputeContext_index]++;
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
class ObservableComputeContext {
    [ObservableComputeContext_index] = 0;
    [ObservableComputeContext_effects] = [];
    [ObservableComputeContext_observableConfig];
    [ObservableComputeContext_observer];
    [ObservableComputeContext_scheduledComputationSubscription] = Disposable.disposed;
    [ObservableComputeContext_runComputation];
    [ObservableComputeContext_mode];
    [ObservableComputeContext_cleanup] = () => {
        const effects = this[ObservableComputeContext_effects];
        const hasOutstandingEffects = effects.findIndex(effect => (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
            !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
        if (!hasOutstandingEffects &&
            this[ObservableComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
            this[ObservableComputeContext_observer][SinkLike_complete]();
        }
    };
    constructor(observer, runComputation, mode, config) {
        this[ObservableComputeContext_observer] = observer;
        this[ObservableComputeContext_runComputation] = runComputation;
        this[ObservableComputeContext_mode] = mode;
        this[ObservableComputeContext_observableConfig] = config;
    }
    [ObservableComputeContext_awaitOrObserve](observable, shouldAwait) {
        if (__DEV__) {
            raiseIf((this[ObservableComputeContext_observableConfig][ComputationLike_isSynchronous] ??
                true) &&
                !observable[ComputationLike_isSynchronous], "cannot observe a non-runnable observable in a SynchronousObservable computation");
        }
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        const observer = this[ObservableComputeContext_observer];
        const runComputation = this[ObservableComputeContext_runComputation];
        if (effect[AwaitOrObserveEffect_observable] === observable) {
            return effect[AwaitOrObserveEffect_value];
        }
        else {
            effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
            effect[AwaitOrObserveEffect_observable] = observable;
            effect[AwaitOrObserveEffect_value] = none;
            effect[AwaitOrObserveEffect_hasValue] = false;
            effect[AwaitOrObserveEffect_subscription] = pipe(observable, EventSource.subscribe((next) => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[ObservableComputeContext_mode] === CombineLatestComputeMode) {
                    runComputation();
                }
                else {
                    const scheduledComputationSubscription = this[ObservableComputeContext_scheduledComputationSubscription];
                    this[ObservableComputeContext_scheduledComputationSubscription] =
                        scheduledComputationSubscription[DisposableLike_isDisposed]
                            ? pipe(observer[SchedulerLike_schedule](function* () {
                                runComputation();
                            }), Disposable.addTo(observer))
                            : scheduledComputationSubscription;
                }
            }, { scheduler: observer }), Disposable.addTo(observer), DisposableContainer.onComplete(this[ObservableComputeContext_cleanup]));
            return shouldAwait ? raiseError(awaiting) : none;
        }
    }
    [ObservableComputeContext_constant](value, ...args) {
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
    [ObservableComputeContext_memoOrUse](shouldUse, f, ...args) {
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
                pipe(value, Disposable.addTo(this[ObservableComputeContext_observer]));
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
            ctx[ObservableComputeContext_index] = 0;
            result = computation();
        }
        catch (e) {
            isAwaiting = e === awaiting;
            if (!isAwaiting) {
                err = error(e);
            }
        }
        const effects = ctx[ObservableComputeContext_effects];
        if (effects[Array_length] > ctx[ObservableComputeContext_index]) {
            const effectsLength = effects[Array_length];
            for (let i = ctx[ObservableComputeContext_index]; i < effectsLength; i++) {
                const effect = ctx[ObservableComputeContext_effects][i];
                if (effect[ComputeEffect_type] === Await ||
                    effect[ComputeEffect_type] === Observe) {
                    effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
                }
            }
        }
        ctx[ObservableComputeContext_effects][Array_length] =
            ctx[ObservableComputeContext_index];
        currentCtx = none;
        ctx[ObservableComputeContext_index] = 0;
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
    const ctx = newInstance(ObservableComputeContext, observer, runComputation, mode, config);
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
