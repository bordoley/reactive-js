/// <reference types="./effects.d.ts" />
import { isSome, pipe, ignore, none, raiseWithDebugMessage, arrayEquality, error, raiseError, getLength, newInstance, isNone } from './functions.mjs';
import { empty, forEach, subscribe, create } from './rx/Observable.mjs';
import { getScheduler, schedule } from './rx/Observer.mjs';
import { notify } from './rx/Sink.mjs';
import { stream, createStateStore } from './streaming/Streamable.mjs';
import { dispose, disposed, isDisposed, addTo, onComplete } from './util/Disposable.mjs';

var _a, _b, _c, _d;
const Memo = 1;
const Await = 2;
const Observe = 3;
const Using = 4;
const AsyncEffect_type = Symbol("AsyncEffect_type");
const MemoOrUsingEffect_func = Symbol("MemoOrUsingEffect_func");
const MemoOrUsingEffect_args = Symbol("MemoOrUsingEffect_args");
const MemoOrUsingEffect_value = Symbol("MemoOrUsingEffect_value");
const AwaitOrObserveEffect_observable = Symbol("AwaitOrObserveEffect_observable");
const AwaitOrObserveEffect_subscription = Symbol("AwaitOrObserveEffect_subscription");
const AwaitOrObserveEffect_value = Symbol("AwaitOrObserveEffect_value");
const AwaitOrObserveEffect_hasValue = Symbol("AwaitOrObserveEffect_hasValue");
const validateAsyncEffect = ((ctx, type) => {
    const { [AsyncContext_effects]: effects, [AsyncContext_index]: index } = ctx;
    ctx[AsyncContext_index]++;
    const effect = effects[index];
    if (isSome(effect) && effect[AsyncEffect_type] === type) {
        return effect;
    }
    else {
        if (isSome(effect) &&
            (effect[AsyncEffect_type] === Await ||
                effect[AsyncEffect_type] === Observe)) {
            pipe(effect[AwaitOrObserveEffect_subscription], dispose());
        }
        const newEffect = type === Memo
            ? {
                [AsyncEffect_type]: type,
                [MemoOrUsingEffect_func]: ignore,
                [MemoOrUsingEffect_args]: [],
                [MemoOrUsingEffect_value]: none,
            }
            : type === Await || type === Observe
                ? {
                    [AsyncEffect_type]: type,
                    [AwaitOrObserveEffect_observable]: empty(),
                    [AwaitOrObserveEffect_subscription]: disposed,
                    [AwaitOrObserveEffect_value]: none,
                    [AwaitOrObserveEffect_hasValue]: false,
                }
                : type === Using
                    ? {
                        [AsyncEffect_type]: type,
                        [MemoOrUsingEffect_func]: ignore,
                        [MemoOrUsingEffect_args]: [],
                        [MemoOrUsingEffect_value]: disposed,
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
const AsyncContext_index = Symbol("AsyncContext_index");
const AsyncContext_cleanup = Symbol("AsyncContext_cleanup");
const AsyncContext_effects = Symbol("AsyncContext_effects");
const AsyncContext_mode = Symbol("AsyncContext_mode");
const AsyncContext_observer = Symbol("AsyncContext_observer");
const AsyncContext_runComputation = Symbol("AsyncContext_runComputation");
const AsyncContext_scheduledComputationSubscription = Symbol("AsyncContext_scheduledComputationSubscription");
const AsyncContext_awaitOrObserve = Symbol("AsyncContext_awaitOrObserve");
const AsyncContext_memoOrUse = Symbol("AsyncContext_memoOrUse");
class AsyncContext {
    constructor(observer, runComputation, mode) {
        this[_a] = 0;
        this[_b] = [];
        this[_c] = disposed;
        this[_d] = () => {
            const { [AsyncContext_effects]: effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => (effect[AsyncEffect_type] === Await ||
                effect[AsyncEffect_type] === Observe) &&
                !isDisposed(effect[AwaitOrObserveEffect_subscription])) >= 0;
            if (!hasOutstandingEffects &&
                isDisposed(this[AsyncContext_scheduledComputationSubscription])) {
                pipe(this[AsyncContext_observer], dispose());
            }
        };
        this[AsyncContext_observer] = observer;
        this[AsyncContext_runComputation] = runComputation;
        this[AsyncContext_mode] = mode;
    }
    [(_a = AsyncContext_index, _b = AsyncContext_effects, _c = AsyncContext_scheduledComputationSubscription, _d = AsyncContext_cleanup, AsyncContext_awaitOrObserve)](observable, shouldAwait) {
        const effect = shouldAwait
            ? validateAsyncEffect(this, Await)
            : validateAsyncEffect(this, Observe);
        if (effect[AwaitOrObserveEffect_observable] === observable) {
            return effect[AwaitOrObserveEffect_value];
        }
        else {
            pipe(effect[AwaitOrObserveEffect_subscription], dispose());
            const { [AsyncContext_observer]: observer, [AsyncContext_runComputation]: runComputation, } = this;
            const scheduler = getScheduler(observer);
            const subscription = pipe(observable, forEach(next => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[AsyncContext_mode] === "combine-latest") {
                    runComputation();
                }
                else {
                    let { [AsyncContext_scheduledComputationSubscription]: scheduledComputationSubscription, } = this;
                    this[AsyncContext_scheduledComputationSubscription] = isDisposed(scheduledComputationSubscription)
                        ? pipe(observer, schedule(runComputation))
                        : scheduledComputationSubscription;
                }
            }), subscribe(scheduler), addTo(observer), onComplete(this[AsyncContext_cleanup]));
            effect[AwaitOrObserveEffect_observable] = observable;
            effect[AwaitOrObserveEffect_subscription] = subscription;
            effect[AwaitOrObserveEffect_value] = none;
            effect[AwaitOrObserveEffect_hasValue] = false;
            return shouldAwait ? raiseError(awaiting) : none;
        }
    }
    [AsyncContext_memoOrUse](shouldUse, f, ...args) {
        const effect = shouldUse
            ? validateAsyncEffect(this, Using)
            : validateAsyncEffect(this, Memo);
        if (f === effect[MemoOrUsingEffect_func] &&
            arrayStrictEquality(args, effect[MemoOrUsingEffect_args])) {
            return effect[MemoOrUsingEffect_value];
        }
        else {
            if (shouldUse) {
                pipe(effect[MemoOrUsingEffect_value], dispose());
            }
            const value = f(...args);
            effect[MemoOrUsingEffect_func] = f;
            effect[MemoOrUsingEffect_args] = args;
            effect[MemoOrUsingEffect_value] = value;
            if (shouldUse) {
                pipe(value, addTo(this[AsyncContext_observer]));
            }
            return value;
        }
    }
}
let currentCtx = none;
const async = (computation, { mode = "batched" } = {}) => create((observer) => {
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
        const { [AsyncContext_effects]: effects } = ctx;
        if (getLength(effects) > ctx[AsyncContext_index]) {
            const effectsLength = effects.length;
            for (let i = ctx[AsyncContext_index]; i < effectsLength; i++) {
                const effect = ctx[AsyncContext_effects][i];
                if (effect[AsyncEffect_type] === Await ||
                    effect[AsyncEffect_type] === Observe) {
                    pipe(effect[AwaitOrObserveEffect_subscription], dispose());
                }
            }
        }
        ctx[AsyncContext_effects].length = ctx[AsyncContext_index];
        currentCtx = none;
        ctx[AsyncContext_index] = 0;
        const effectsLength = getLength(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { [AsyncEffect_type]: type } = effect;
            if ((type === Await || type === Observe) &&
                !effect[AwaitOrObserveEffect_hasValue]) {
                allObserveEffectsHaveValues = false;
            }
            if ((type === Await || type === Observe) &&
                !isDisposed(effect[AwaitOrObserveEffect_subscription])) {
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
            pipe(observer, notify(result));
        }
        if (shouldDispose) {
            pipe(observer, dispose(err));
        }
    };
    const ctx = newInstance(AsyncContext, observer, runComputation, mode);
    pipe(observer, schedule(runComputation));
});
const assertCurrentContext = () => isNone(currentCtx)
    ? raiseWithDebugMessage("effect must be called within a computational expression")
    : currentCtx;
const __memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](false, f, ...args);
};
const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, true);
};
const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, false);
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
        const scheduler = getScheduler(ctx[AsyncContext_observer]);
        const observable = ctx[AsyncContext_memoOrUse](false, deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](false, subscribe, scheduler);
        ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
const __using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](true, f, ...args);
};
function __currentScheduler() {
    const ctx = assertCurrentContext();
    return getScheduler(ctx[AsyncContext_observer]);
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
