/// <reference types="./Producer.compute.d.ts" />

import { Array_length, Array_push, __DEV__, } from "../../../__internal__/constants.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { arrayEquality, error, ignore, isNone, isSome, newInstance, none, pipe, raiseError, raiseIf, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import { Producer_genPure } from "./Producer.gen.js";
const m = Computation.makeModule({
    genPure: Producer_genPure,
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
export const ProducerComputeContext_awaitOrObserve = Symbol("ProducerComputeContext_awaitOrObserve");
const ProducerComputeContext_cleanup = Symbol("ProducerComputeContext_cleanup");
export const ProducerComputeContext_constant = Symbol("ProducerComputeContext_constant");
const ProducerComputeContext_effects = Symbol("ProducerComputeContext_effects");
const ProducerComputeContext_index = Symbol("ProducerComputeContext_index");
export const ProducerComputeContext_memoOrUse = Symbol("ProducerComputeContext_memoOrUse");
export const ProducerComputeContext_consumer = Symbol("ProducerComputeContext_consumer");
const ProducerComputeContext_runComputation = Symbol("ProducerComputeContext_runComputation");
const ProducerComputeContext_scheduledComputationSubscription = Symbol("ProducerComputeContext_scheduledComputationSubscription");
const ComputeEffect_type = Symbol("ComputeEffect_type");
const ConstantEffect_args = Symbol("ConstantEffect_args");
const ConstantEffect_value = Symbol("ConstantEffect_value");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");
const validateComputeEffect = ((ctx, type) => {
    const effects = ctx[ProducerComputeContext_effects];
    const index = ctx[ProducerComputeContext_index];
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
    ctx[ProducerComputeContext_index]++;
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
class ProducerProducerComputeContext {
    [ProducerComputeContext_index] = 0;
    [ProducerComputeContext_effects] = [];
    [ProducerComputeContext_consumer];
    [ProducerComputeContext_scheduledComputationSubscription] = Disposable.disposed;
    [ProducerComputeContext_runComputation];
    [ProducerComputeContext_cleanup] = () => {
        const effects = this[ProducerComputeContext_effects];
        const hasOutstandingEffects = effects.findIndex(effect => (effect[ComputeEffect_type] === Await ||
            effect[ComputeEffect_type] === Observe) &&
            !effect[AwaitOrObserveEffect_subscription][DisposableLike_isDisposed]) >= 0;
        if (!hasOutstandingEffects &&
            this[ProducerComputeContext_scheduledComputationSubscription][DisposableLike_isDisposed]) {
            this[ProducerComputeContext_consumer][SinkLike_complete]();
        }
    };
    constructor(consumer, runComputation) {
        this[ProducerComputeContext_consumer] = consumer;
        this[ProducerComputeContext_runComputation] = runComputation;
    }
    [ProducerComputeContext_awaitOrObserve](observable, shouldAwait) {
        const effect = shouldAwait
            ? validateComputeEffect(this, Await)
            : validateComputeEffect(this, Observe);
        const consumer = this[ProducerComputeContext_consumer];
        const runComputation = this[ProducerComputeContext_runComputation];
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
                runComputation();
            }), Disposable.addTo(consumer), DisposableContainer.onComplete(this[ProducerComputeContext_cleanup]));
            return shouldAwait ? raiseError(awaiting) : none;
        }
    }
    [ProducerComputeContext_constant](value, ...args) {
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
    [ProducerComputeContext_memoOrUse](shouldUse, f, ...args) {
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
                pipe(value, Disposable.addTo(this[ProducerComputeContext_consumer]));
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
const Producer_compute = ((computation) => DeferredEventSource.create(async (consumer) => {
    const runComputation = () => {
        let result = none;
        let err = none;
        let isAwaiting = false;
        currentCtx = ctx;
        try {
            // Explicitly reset the count before running the computation
            // for the combine-latest case where runComputation can
            // be invoked recursively on itself.
            ctx[ProducerComputeContext_index] = 0;
            result = computation();
        }
        catch (e) {
            isAwaiting = e === awaiting;
            if (!isAwaiting) {
                err = error(e);
            }
        }
        const effects = ctx[ProducerComputeContext_effects];
        if (effects[Array_length] > ctx[ProducerComputeContext_index]) {
            const effectsLength = effects[Array_length];
            for (let i = ctx[ProducerComputeContext_index]; i < effectsLength; i++) {
                const effect = ctx[ProducerComputeContext_effects][i];
                if (effect[ComputeEffect_type] === Await ||
                    effect[ComputeEffect_type] === Observe) {
                    effect[AwaitOrObserveEffect_subscription][DisposableLike_dispose]();
                }
            }
        }
        ctx[ProducerComputeContext_effects][Array_length] =
            ctx[ProducerComputeContext_index];
        currentCtx = none;
        ctx[ProducerComputeContext_index] = 0;
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
        const combineLatestModeShouldNotify = allObserveEffectsHaveValues;
        const hasError = isSome(err);
        const shouldNotify = !hasError && !isAwaiting && combineLatestModeShouldNotify;
        const shouldComplete = !hasOutstandingEffects;
        if (hasError) {
            consumer[DisposableLike_dispose](err);
            return;
        }
        if (shouldNotify) {
            consumer[EventListenerLike_notify](result);
        }
        if (shouldComplete) {
            consumer[SinkLike_complete]();
        }
    };
    const ctx = newInstance(ProducerProducerComputeContext, consumer, runComputation);
    await Promise.resolve();
    runComputation();
}, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: false,
}));
export default Producer_compute;
