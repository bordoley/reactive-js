/// <reference types="./effects.d.ts" />
import { arrayEquality, none, isNone, ignore, raise, pipe, getLength, isSome, newInstance } from '../functions.mjs';
import { emptyObservable, deferHotObservable } from '../rx.mjs';
import { forEach, subscribe } from './ObservableLike.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { schedule } from '../scheduling/SchedulerLike.mjs';
import { createStateStore } from '../streaming.mjs';
import { stream } from '../streaming/StreamableLike.mjs';
import { disposed } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { notify } from '../util/SinkLike.mjs';
import { isDisposed, dispose, addTo, onComplete } from '../__internal__/util/DisposableLikeInternal.mjs';

const arrayStrictEquality = arrayEquality();
let currentCtx = none;
function validateObservableEffect(ctx, type) {
    const { effects, index } = ctx;
    ctx.index++;
    const effect = effects[index];
    if (isNone(effect)) {
        const newEffect = type === 1 /* EffectContainerOf.Memo */
            ? {
                type,
                f: ignore,
                args: [],
                value: none,
            }
            : type === 2 /* EffectContainerOf.Observe */
                ? {
                    type,
                    observable: emptyObservable(),
                    subscription: disposed,
                    value: none,
                    hasValue: false,
                }
                : type === 3 /* EffectContainerOf.Using */
                    ? {
                        type,
                        f: ignore,
                        args: [],
                        value: disposed,
                    }
                    : raise("invalid effect type");
        effects.push(newEffect);
        return newEffect;
    }
    else {
        return effect.type === type
            ? effect
            : raise("observable effect called out of order");
    }
}
class ObservableContext {
    constructor(observer, runComputation, mode) {
        this.observer = observer;
        this.runComputation = runComputation;
        this.mode = mode;
        this.index = 0;
        this.effects = [];
        this.scheduledComputationSubscription = disposed;
        this.cleanup = () => {
            const { effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => effect.type === 2 /* EffectContainerOf.Observe */ &&
                !isDisposed(effect.subscription)) >= 0;
            if (!hasOutstandingEffects &&
                isDisposed(this.scheduledComputationSubscription)) {
                pipe(this.observer, dispose());
            }
        };
    }
    memo(f, ...args) {
        const effect = validateObservableEffect(this, 1 /* EffectContainerOf.Memo */);
        if (f === effect.f && arrayStrictEquality(args, effect.args)) {
            return effect.value;
        }
        else {
            const value = f(...args);
            effect.f = f;
            effect.args = args;
            effect.value = value;
            return value;
        }
    }
    observe(observable) {
        const effect = validateObservableEffect(this, 2 /* EffectContainerOf.Observe */);
        if (effect.observable === observable) {
            return effect.value;
        }
        else {
            pipe(effect.subscription, dispose());
            const { observer, runComputation } = this;
            const scheduler = getScheduler(observer);
            const subscription = pipe(observable, forEach(next => {
                effect.value = next;
                effect.hasValue = true;
                if (this.mode === "combine-latest") {
                    runComputation();
                }
                else {
                    let { scheduledComputationSubscription } = this;
                    this.scheduledComputationSubscription = isDisposed(scheduledComputationSubscription)
                        ? pipe(scheduler, schedule(runComputation), addTo(observer))
                        : scheduledComputationSubscription;
                }
            }), subscribe(scheduler), addTo(observer), onComplete(this.cleanup));
            effect.observable = observable;
            effect.subscription = subscription;
            effect.value = none;
            effect.hasValue = false;
            return none;
        }
    }
    using(f, ...args) {
        const effect = validateObservableEffect(this, 3 /* EffectContainerOf.Using */);
        if (f === effect.f && arrayStrictEquality(args, effect.args)) {
            return effect.value;
        }
        else {
            pipe(effect.value, dispose());
            const value = pipe(f(...args), addTo(this.observer));
            effect.f = f;
            effect.args = args;
            effect.value = value;
            return value;
        }
    }
}
const observable = (computation, { mode = "batched" } = {}) => deferHotObservable(() => (observer) => {
    const runComputation = () => {
        let result = none;
        let error = none;
        currentCtx = ctx;
        try {
            result = computation();
        }
        catch (cause) {
            error = { cause };
        }
        currentCtx = none;
        ctx.index = 0;
        const { effects } = ctx;
        const effectsLength = getLength(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { type } = effect;
            if (type === 2 /* EffectContainerOf.Observe */ &&
                !effect.hasValue) {
                allObserveEffectsHaveValues = false;
            }
            if (type === 2 /* EffectContainerOf.Observe */ &&
                !isDisposed(effect.subscription)) {
                hasOutstandingEffects = true;
            }
            if (!allObserveEffectsHaveValues && hasOutstandingEffects) {
                break;
            }
        }
        const combineLatestModeShouldNotify = mode === "combine-latest" &&
            allObserveEffectsHaveValues &&
            hasOutstandingEffects;
        const hasError = isSome(error);
        const shouldNotify = !hasError && (combineLatestModeShouldNotify || mode === "batched");
        const shouldDispose = !hasOutstandingEffects || hasError;
        if (shouldNotify) {
            pipe(observer, notify(result));
        }
        if (shouldDispose) {
            pipe(observer, dispose(error));
        }
    };
    const ctx = newInstance(ObservableContext, observer, runComputation, mode);
    return runComputation();
});
const assertCurrentContext = () => isNone(currentCtx)
    ? raise("effect must be called within a computational expression")
    : currentCtx;
function __memo(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.memo(f, ...args);
}
const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx.observe(observable);
};
const deferSideEffect = (f, ...args) => deferHotObservable(() => observer => {
    f(...args);
    pipe(observer, notify(none), dispose());
});
function __do(f, ...args) {
    const ctx = assertCurrentContext();
    const scheduler = getScheduler(ctx.observer);
    const observable = ctx.memo(deferSideEffect, f, ...args);
    const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
    ctx.using(subscribeOnScheduler, observable);
}
function __using(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.using(f, ...args);
}
function __currentScheduler() {
    const ctx = assertCurrentContext();
    return getScheduler(ctx.observer);
}
const __stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay) => pipe(streamable, stream(scheduler, { replay }));
    return (streamable, { replay = 0, scheduler, } = {}) => {
        const currentScheduler = __currentScheduler();
        return __using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay);
    };
})();
const __state = /*@__PURE__*/ (() => {
    const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
    return (initialState, options = {}) => {
        const { equality } = options;
        const optionsMemo = __memo(createStateOptions, equality);
        const streamable = __memo(createStateStore, initialState, optionsMemo);
        return __stream(streamable);
    };
})();

export { __currentScheduler, __do, __memo, __observe, __state, __stream, __using, observable };
