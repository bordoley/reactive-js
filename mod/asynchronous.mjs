import { arrayEquality, pipe } from './functions.mjs';
import { none, isNone } from './option.mjs';
import { dispose, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown, disposed } from './disposable.mjs';
import { schedule } from './scheduler.mjs';
import { AbstractDelegatingObserver, assertObserverState, observe, defer } from './observable.mjs';

const arrayStrictEquality = arrayEquality();
class InitialAsyncContextImpl {
    constructor(effects) {
        this.effects = effects;
    }
    await(observable) {
        this.effects.push({
            type: 1 /* Await */,
            observable,
            subscription: none,
            value: none,
        });
        return none;
    }
    memo(f, ...args) {
        const value = f(...args);
        this.effects.push({ type: 2 /* Memo */, f, args, value });
        return value;
    }
}
const validateState = (ctx, type) => {
    const { effects, index } = ctx;
    if (index >= effects.length) {
        throw new Error();
    }
    const effect = effects[index];
    ctx.index++;
    if (effect.type !== type) {
        throw new Error();
    }
    return effect;
};
class AsyncContextImpl {
    constructor(effects) {
        this.effects = effects;
        this.index = 0;
    }
    await(observable) {
        const effect = validateState(this, 1 /* Await */);
        if (observable === effect.observable) {
            return effect.value;
        }
        else {
            const oldSubscription = effect.subscription;
            effect.subscription = none;
            effect.observable = observable;
            pipe(oldSubscription, dispose());
            return none;
        }
    }
    memo(f, ...args) {
        const effect = validateState(this, 2 /* Memo */);
        const fEqual = f === effect.f;
        const argsEqual = arrayStrictEquality(args, effect.args);
        if (fEqual && argsEqual) {
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
}
class AsynchronousObserver extends AbstractDelegatingObserver {
    constructor(delegate, scheduleComputation, isDone, effect) {
        super(delegate);
        this.scheduleComputation = scheduleComputation;
        this.effect = effect;
        addOnDisposedWithError(this, delegate);
        addOnDisposedWithoutErrorTeardown(this, () => {
            if (isDone()) {
                pipe(delegate, dispose());
            }
        });
    }
    notify(next) {
        assertObserverState(this);
        this.effect.value = next;
        this.scheduleComputation(this.delegate);
    }
}
const hasOutstandingEffects = (effects) => {
    const effectsLength = effects.length;
    for (let i = 0; i < effectsLength; i++) {
        const effect = effects[i];
        if (effect.type === 1 /* Await */) {
            const { subscription } = effect;
            const effectIsOutstanding = isNone(subscription) || !subscription.isDisposed;
            if (effectIsOutstanding) {
                return true;
            }
        }
    }
    return false;
};
let currentCtx = none;
const async = (computation) => {
    const factory = () => {
        const effects = [];
        let initialized = false;
        let scheduledComputationSubscription = disposed;
        const isDone = () => {
            return !hasOutstandingEffects(effects) && scheduledComputationSubscription.isDisposed;
        };
        const scheduleComputation = (observer) => {
            if (scheduledComputationSubscription.isDisposed) {
                scheduledComputationSubscription = pipe(observer, schedule(runComputation));
            }
        };
        const runComputation = (observer) => {
            const ctx = !initialized
                ? new InitialAsyncContextImpl(effects)
                : new AsyncContextImpl(effects);
            initialized = true;
            let result = none;
            currentCtx = ctx;
            try {
                result = computation();
            }
            catch (e) {
                currentCtx = none;
                throw e;
            }
            observer.notify(result);
            if (!hasOutstandingEffects(effects)) {
                pipe(observer, dispose());
            }
            else {
                const effectsLength = effects.length;
                for (let i = 0; i < effectsLength; i++) {
                    const effect = effects[i];
                    if (effect.type === 1 /* Await */ &&
                        isNone(effect.subscription)) {
                        const innerObserver = new AsynchronousObserver(observer, scheduleComputation, isDone, effect);
                        const { observable } = effect;
                        pipe(observable, observe(innerObserver));
                        effect.subscription = innerObserver;
                    }
                }
            }
        };
        return runComputation;
    };
    return defer(factory);
};
const assertCurrentContext = () => {
    if (isNone(currentCtx)) {
        throw new Error();
    }
    return currentCtx;
};
function __memo(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.memo(f, ...args);
}
const __await = (observable) => {
    const ctx = assertCurrentContext();
    return ctx.await(observable);
};

export { __await, __memo, async };
