/// <reference types="./Observable.async.d.ts" />
import { isSome, pipe, ignore, none, raiseWithDebugMessage, arrayEquality, error, raiseError, isNone, getLength, newInstance } from '../../../functions.mjs';
import Streamable_createStateStore from '../../../streaming/Streamable/__internal__/Streamable.createStateStore.mjs';
import Streamable_stream from '../../../streaming/Streamable/__internal__/Streamable.stream.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_disposed from '../../../util/Disposable/__internal__/Disposable.disposed.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Disposable_onComplete from '../../../util/Disposable/__internal__/Disposable.onComplete.mjs';
import Observer_getScheduler from '../../Observer/__internal__/Observer.getScheduler.mjs';
import Observer_schedule from '../../Observer/__internal__/Observer.schedule.mjs';
import Sink_notify from '../../Sink/__internal__/Sink.notify.mjs';
import Observable_create from './Observable.create.mjs';
import Observable_empty from './Observable.empty.mjs';
import Observable_forEach from './Observable.forEach.mjs';
import Observable_subscribe from './Observable.subscribe.mjs';

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
            pipe(effect[AwaitOrObserveEffect_subscription], Disposable_dispose());
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
                    [AwaitOrObserveEffect_observable]: Observable_empty(),
                    [AwaitOrObserveEffect_subscription]: Disposable_disposed,
                    [AwaitOrObserveEffect_value]: none,
                    [AwaitOrObserveEffect_hasValue]: false,
                }
                : type === Using
                    ? {
                        [AsyncEffect_type]: type,
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
        this[_c] = Disposable_disposed;
        this[_d] = () => {
            const { [AsyncContext_effects]: effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => (effect[AsyncEffect_type] === Await ||
                effect[AsyncEffect_type] === Observe) &&
                !Disposable_isDisposed(effect[AwaitOrObserveEffect_subscription])) >= 0;
            if (!hasOutstandingEffects &&
                Disposable_isDisposed(this[AsyncContext_scheduledComputationSubscription])) {
                pipe(this[AsyncContext_observer], Disposable_dispose());
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
            pipe(effect[AwaitOrObserveEffect_subscription], Disposable_dispose());
            const { [AsyncContext_observer]: observer, [AsyncContext_runComputation]: runComputation, } = this;
            const scheduler = Observer_getScheduler(observer);
            const subscription = pipe(observable, Observable_forEach(next => {
                effect[AwaitOrObserveEffect_value] = next;
                effect[AwaitOrObserveEffect_hasValue] = true;
                if (this[AsyncContext_mode] === "combine-latest") {
                    runComputation();
                }
                else {
                    let { [AsyncContext_scheduledComputationSubscription]: scheduledComputationSubscription, } = this;
                    this[AsyncContext_scheduledComputationSubscription] =
                        Disposable_isDisposed(scheduledComputationSubscription)
                            ? pipe(observer, Observer_schedule(runComputation))
                            : scheduledComputationSubscription;
                }
            }), Observable_subscribe(scheduler), Disposable_addTo(observer), Disposable_onComplete(this[AsyncContext_cleanup]));
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
                pipe(effect[MemoOrUsingEffect_value], Disposable_dispose());
            }
            const value = f(...args);
            effect[MemoOrUsingEffect_func] = f;
            effect[MemoOrUsingEffect_args] = args;
            effect[MemoOrUsingEffect_value] = value;
            if (shouldUse) {
                pipe(value, Disposable_addTo(this[AsyncContext_observer]));
            }
            return value;
        }
    }
}
let currentCtx = none;
const assertCurrentContext = () => isNone(currentCtx)
    ? raiseWithDebugMessage("effect must be called within a computational expression")
    : currentCtx;
const Observable_async = (computation, { mode = "batched" } = {}) => Observable_create((observer) => {
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
                    pipe(effect[AwaitOrObserveEffect_subscription], Disposable_dispose());
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
                !Disposable_isDisposed(effect[AwaitOrObserveEffect_subscription])) {
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
            pipe(observer, Sink_notify(result));
        }
        if (shouldDispose) {
            pipe(observer, Disposable_dispose(err));
        }
    };
    const ctx = newInstance(AsyncContext, observer, runComputation, mode);
    pipe(observer, Observer_schedule(runComputation));
});
const Observable_async__memo = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](false, f, ...args);
};
const Observable_async__await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, true);
};
const Observable_async__observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_awaitOrObserve](observable, false);
};
const Observable_async__do = /*@__PURE__*/ (() => {
    const deferSideEffect = (f, ...args) => Observable_create(observer => {
        const callback = () => {
            f(...args);
            pipe(observer, Sink_notify(none), Disposable_dispose());
        };
        pipe(observer, Observer_schedule(callback));
    });
    return (f, ...args) => {
        const ctx = assertCurrentContext();
        const scheduler = Observer_getScheduler(ctx[AsyncContext_observer]);
        const observable = ctx[AsyncContext_memoOrUse](false, deferSideEffect, f, ...args);
        const subscribeOnScheduler = ctx[AsyncContext_memoOrUse](false, Observable_subscribe, scheduler);
        ctx[AsyncContext_memoOrUse](true, subscribeOnScheduler, observable);
    };
})();
const Observable_async__using = (f, ...args) => {
    const ctx = assertCurrentContext();
    return ctx[AsyncContext_memoOrUse](true, f, ...args);
};
function Observable_async__currentScheduler() {
    const ctx = assertCurrentContext();
    return Observer_getScheduler(ctx[AsyncContext_observer]);
}
const Observable_async__stream = /*@__PURE__*/ (() => {
    const streamOnSchedulerFactory = (streamable, scheduler, replay) => pipe(streamable, Streamable_stream(scheduler, { replay }));
    return (streamable, { replay = 0, scheduler, } = {}) => {
        const currentScheduler = Observable_async__currentScheduler();
        return Observable_async__using(streamOnSchedulerFactory, streamable, scheduler !== null && scheduler !== void 0 ? scheduler : currentScheduler, replay);
    };
})();
const Observable_async__state = /*@__PURE__*/ (() => {
    const createStateOptions = (equality) => isSome(equality) ? { equality } : none;
    return (initialState, options = {}) => {
        const { equality } = options;
        const optionsMemo = Observable_async__memo(createStateOptions, equality);
        const streamable = Observable_async__memo(Streamable_createStateStore, initialState, optionsMemo);
        return Observable_async__stream(streamable);
    };
})();

export { AsyncContext_awaitOrObserve, AsyncContext_memoOrUse, AsyncContext_observer, Observable_async, Observable_async__await, Observable_async__currentScheduler, Observable_async__do, Observable_async__memo, Observable_async__observe, Observable_async__state, Observable_async__stream, Observable_async__using, assertCurrentContext };
