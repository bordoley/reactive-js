import { AbstractDisposable, dispose, add, } from "../disposable.js";
import { pipe } from "../functions.js";
import { switchAll, onSubscribe, dispatch, } from "../observable.js";
import { isNone, isSome } from "../option.js";
import { AbstractSchedulerContinuation, schedule, } from "../scheduler.js";
import { createStreamable, stream as streamStreamable, } from "../streamable.js";
class ReactiveCacheSchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(cache) {
        super();
        this.cache = cache;
    }
    produce(scheduler) {
        const { cache, maxCount, garbage } = this.cache;
        for (const [, stream] of garbage) {
            dispose(stream);
            const hasMoreToCleanup = cache.size > maxCount;
            if (hasMoreToCleanup && scheduler.shouldYield()) {
                schedule(scheduler, this);
                return;
            }
            else if (!hasMoreToCleanup) {
                break;
            }
        }
        dispose(this);
    }
}
const markAsGarbage = (reactiveCache, key, stream) => {
    reactiveCache.garbage.set(key, stream);
    if (reactiveCache.cache.size > reactiveCache.maxCount &&
        !reactiveCache.cleaning) {
        const continuation = add(new ReactiveCacheSchedulerContinuation(reactiveCache), () => {
            reactiveCache.cleaning = false;
        });
        reactiveCache.cleaning = true;
        schedule(reactiveCache.cleanupScheduler, continuation);
    }
};
const switchAllAsyncEnumerableInstance = createStreamable(switchAll());
const switchAllAsyncEnumerable = () => switchAllAsyncEnumerableInstance;
class ReactiveCacheImpl extends AbstractDisposable {
    constructor(dispatchScheduler, cleanupScheduler, maxCount) {
        super();
        this.dispatchScheduler = dispatchScheduler;
        this.cleanupScheduler = cleanupScheduler;
        this.maxCount = maxCount;
        this.cache = new Map();
        this.cleaning = false;
        this.garbage = new Map();
        add(this, () => {
            for (const value of this.cache.values()) {
                const [stream] = value;
                dispose(stream);
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
            const stream = add(streamStreamable(switchAllAsyncEnumerable(), this.dispatchScheduler), () => {
                this.cache.delete(key);
                this.garbage.delete(key);
            });
            const onDisposeCleanup = (_) => add(this, schedule(this.cleanupScheduler, () => {
                if (stream.subscriberCount === 0) {
                    markAsGarbage(this, key, stream);
                }
            }));
            const onSubscribeUnmark = () => {
                this.garbage.delete(key);
                return onDisposeCleanup;
            };
            const observable = pipe(stream, onSubscribe(onSubscribeUnmark));
            cachedValue = [stream, observable];
            this.cache.set(key, cachedValue);
            markAsGarbage(this, key, stream);
        }
        const [stream, observable] = cachedValue;
        dispatch(stream, value);
        return observable;
    }
}
export const createReactiveCache = (dispatchScheduler, cleanupScheduler, maxCount = Number.MAX_SAFE_INTEGER) => new ReactiveCacheImpl(dispatchScheduler, cleanupScheduler, maxCount);
export const getOrSet = (cache, key, defaultValue) => {
    const observable = cache.get(key);
    return observable !== null && observable !== void 0 ? observable : cache.set(key, defaultValue);
};
