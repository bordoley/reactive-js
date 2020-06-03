import { AbstractDisposable, dispose, addTeardown, addDisposable, } from "../disposable.js";
import { pipe } from "../functions.js";
import { switchAll, onSubscribe, dispatch, } from "../observable.js";
import { isNone, isSome } from "../option.js";
import { schedule, yield$ } from "../scheduler.js";
import { createStreamable, stream as streamStreamable, } from "../streamable.js";
const markAsGarbage = (reactiveCache, key, stream) => {
    reactiveCache.garbage.set(key, stream);
    if (reactiveCache.cache.size > reactiveCache.maxCount &&
        !reactiveCache.cleaning) {
        const continuation = (scheduler) => {
            const { cache, maxCount, garbage } = reactiveCache;
            for (const [, stream] of garbage) {
                pipe(stream, dispose());
                const hasMoreToCleanup = cache.size > maxCount;
                if (hasMoreToCleanup) {
                    yield$(scheduler, 0);
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
    constructor(dispatchScheduler, cleanupScheduler, maxCount) {
        super();
        this.dispatchScheduler = dispatchScheduler;
        this.cleanupScheduler = cleanupScheduler;
        this.maxCount = maxCount;
        this.cache = new Map();
        this.cleaning = false;
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
            const stream = pipe(switchAllStream(), streamStreamable(this.dispatchScheduler));
            addTeardown(stream, () => {
                this.cache.delete(key);
                this.garbage.delete(key);
            });
            const onDisposeCleanup = (_) => addDisposable(this, pipe(this.cleanupScheduler, schedule(() => {
                if (stream.observerCount === 0) {
                    markAsGarbage(this, key, stream);
                }
            })));
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
export const createReactiveCache = (dispatchScheduler, cleanupScheduler, options = {}) => {
    const { maxCount = Number.MAX_SAFE_INTEGER } = options;
    return new ReactiveCacheImpl(dispatchScheduler, cleanupScheduler, maxCount);
};
export const getOrSet = (cache, key, defaultValue) => {
    const observable = cache.get(key);
    return observable !== null && observable !== void 0 ? observable : cache.set(key, defaultValue);
};
