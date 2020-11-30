import { isSome, isNone } from './option.mjs';
import { pipe } from './functions.mjs';
import { dispose, addTeardown, AbstractDisposable, addDisposable } from './disposable.mjs';
import { __yield, schedule } from './scheduler.mjs';
import { switchAll, onSubscribe } from './observable.mjs';
import { createStreamable, stream } from './streamable.mjs';

const markAsGarbage = (reactiveCache, key, stream) => {
    reactiveCache.garbage.set(key, stream);
    if (reactiveCache.cache.size > reactiveCache.maxCount &&
        !reactiveCache.cleaning) {
        const continuation = () => {
            const { cache, maxCount, garbage } = reactiveCache;
            for (const [, stream] of garbage) {
                pipe(stream, dispose());
                // only delete as many entries as we need to.
                const hasMoreToCleanup = cache.size > maxCount;
                if (hasMoreToCleanup) {
                    __yield(0);
                }
                else if (!hasMoreToCleanup) {
                    break;
                }
            }
        };
        reactiveCache.cleaning = true;
        const schedulerContinuation = pipe(reactiveCache.cleanupScheduler, schedule(continuation));
        addTeardown(schedulerContinuation, () => {
            reactiveCache.cleaning = false;
        });
    }
};
const switchAllStreamInstance = createStreamable(switchAll());
const switchAllStream = () => switchAllStreamInstance;
class ReactiveCacheImpl extends AbstractDisposable {
    constructor(dispatchScheduler, cleanupScheduler, 
    // The ideal max number of cache entries.
    // Note don't delete cache entries that are actively being observed.
    maxCount) {
        super();
        this.dispatchScheduler = dispatchScheduler;
        this.cleanupScheduler = cleanupScheduler;
        this.maxCount = maxCount;
        this.cache = new Map();
        this.cleaning = false;
        // Set of keys that are eligible to be garbage collected
        this.garbage = new Map();
        addTeardown(this, () => {
            for (const value of this.cache.values()) {
                const [stream] = value;
                pipe(stream, dispose());
            }
            this.cache.clear();
            this.garbage.clear();
        });
    }
    get(key) {
        const cachedValue = this.cache.get(key);
        if (isSome(cachedValue)) {
            const [, observable] = cachedValue;
            return observable;
        }
        return;
    }
    set(key, value) {
        let cachedValue = this.cache.get(key);
        if (isNone(cachedValue)) {
            const stream$1 = pipe(switchAllStream(), stream(this.dispatchScheduler));
            addTeardown(stream$1, () => {
                this.cache.delete(key);
                this.garbage.delete(key);
            });
            const onDisposeCleanup = (_) => addDisposable(this, pipe(this.cleanupScheduler, schedule(() => {
                if (stream$1.observerCount === 0) {
                    markAsGarbage(this, key, stream$1);
                }
            })));
            const onSubscribeUnmark = () => {
                this.garbage.delete(key);
                return onDisposeCleanup;
            };
            const observable = pipe(stream$1, onSubscribe(onSubscribeUnmark));
            cachedValue = [stream$1, observable];
            this.cache.set(key, cachedValue);
            // Mark the key as garbage until it is subscribed to.
            markAsGarbage(this, key, stream$1);
        }
        const [stream$1, observable] = cachedValue;
        stream$1.dispatch(value);
        return observable;
    }
}
const createReactiveCache = (dispatchScheduler, cleanupScheduler, options = {}) => {
    const { maxCount = Number.MAX_SAFE_INTEGER } = options;
    return new ReactiveCacheImpl(dispatchScheduler, cleanupScheduler, maxCount);
};
const getOrSet = (cache, key, defaultValue) => {
    const observable = cache.get(key);
    return observable !== null && observable !== void 0 ? observable : cache.set(key, defaultValue);
};

export { createReactiveCache, getOrSet };
