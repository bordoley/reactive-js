/// <reference types="./effects.d.ts" />
import { isNone, ignore, none, raise, arrayEquality, pipe, getLength, isSome, newInstance } from './functions.mjs';
import { i as empty, f as forEach, s as subscribe, E as create } from './ObservableLike-ca8b1474.mjs';
import { getScheduler, schedule } from './rx/ObserverLike.mjs';
import { notify } from './rx/SinkLike.mjs';
import { stream, createStateStore } from './streaming/StreamableLike.mjs';
import { disposed, isDisposed, dispose, addTo, onComplete } from './util/DisposableLike.mjs';

const validateAsyncEffect = ((ctx, type) => {
    const { effects, index } = ctx;
    ctx.index++;
    const effect = effects[index];
    if (isNone(effect)) {
        const newEffect = type === 1 /* AsyncEffectType.Memo */
            ? {
                type,
                f: ignore,
                args: [],
                value: none,
            }
            : type === 2 /* AsyncEffectType.Await */ || type === 3 /* AsyncEffectType.Observe */
                ? {
                    type,
                    observable: empty(),
                    subscription: disposed,
                    value: none,
                    hasValue: false,
                }
                : type === 4 /* AsyncEffectType.Using */
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
});
const arrayStrictEquality = arrayEquality();
const awaiting = {};
class AsyncContext {
    constructor(observer, runComputation, mode) {
        this.observer = observer;
        this.runComputation = runComputation;
        this.mode = mode;
        this.index = 0;
        this.effects = [];
        this.scheduledComputationSubscription = disposed;
        this.cleanup = () => {
            const { effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => (effect.type === 2 /* AsyncEffectType.Await */ ||
                effect.type === 3 /* AsyncEffectType.Observe */) &&
                !isDisposed(effect.subscription)) >= 0;
            if (!hasOutstandingEffects &&
                isDisposed(this.scheduledComputationSubscription)) {
                pipe(this.observer, dispose());
            }
        };
    }
    memo(f, ...args) {
        const effect = validateAsyncEffect(this, 1 /* AsyncEffectType.Memo */);
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
    awaitOrObserve(observable, shouldAwait) {
        const effect = shouldAwait
            ? validateAsyncEffect(this, 2 /* AsyncEffectType.Await */)
            : validateAsyncEffect(this, 3 /* AsyncEffectType.Observe */);
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
                        ? pipe(observer, schedule(runComputation))
                        : scheduledComputationSubscription;
                }
            }), subscribe(scheduler), addTo(observer), onComplete(this.cleanup));
            effect.observable = observable;
            effect.subscription = subscription;
            effect.value = none;
            effect.hasValue = false;
            return shouldAwait ? raise(awaiting) : none;
        }
    }
    using(f, ...args) {
        const effect = validateAsyncEffect(this, 4 /* AsyncEffectType.Using */);
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
let currentCtx = none;
const async = (computation, { mode = "batched" } = {}) => create((observer) => {
    const runComputation = () => {
        let result = none;
        let error = none;
        let isAwaiting = false;
        currentCtx = ctx;
        try {
            result = computation();
        }
        catch (cause) {
            isAwaiting = cause === awaiting;
            if (!isAwaiting) {
                error = { cause };
            }
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
            if ((type === 2 /* AsyncEffectType.Await */ ||
                type === 3 /* AsyncEffectType.Observe */) &&
                !effect.hasValue) {
                allObserveEffectsHaveValues = false;
            }
            if ((type === 2 /* AsyncEffectType.Await */ ||
                type === 3 /* AsyncEffectType.Observe */) &&
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
        const shouldNotify = !hasError &&
            !isAwaiting &&
            (combineLatestModeShouldNotify || mode === "batched");
        const shouldDispose = !hasOutstandingEffects || hasError;
        if (shouldNotify) {
            pipe(observer, notify(result));
        }
        if (shouldDispose) {
            pipe(observer, dispose(error));
        }
    };
    const ctx = newInstance(AsyncContext, observer, runComputation, mode);
    pipe(observer, schedule(runComputation));
});
const assertCurrentContext = () => isNone(currentCtx)
    ? raise("effect must be called within a computational expression")
    : currentCtx;
const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx.memo(f, ...args);
};
const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx.awaitOrObserve(observable, true);
};
const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx.awaitOrObserve(observable, false);
};
const __do = /*@__PURE__*/ (() => {
    const deferSideEffect = (f, ...args) => create(observer => {
        const callback = () => {
            f(...args);
            pipe(observer, notify(none), dispose());
        };
        pipe(observer, schedule(callback));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = getScheduler(ctx.observer);
        const observable = ctx.memo(deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
        ctx.using(subscribeOnScheduler, observable);
    };
})();
const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx.using(f, ...args);
};
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

export { __await, __currentScheduler, __do, __memo, __observe, __state, __stream, __using, async };
