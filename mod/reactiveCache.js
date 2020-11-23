'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
require('./readonlyArray.js');
require('./enumerable.js');
require('./runnable.js');
require('./queues.js');
var scheduler = require('./scheduler.js');
var observable = require('./observable.js');
require('./env.js');
require('./dispatcher.js');
var streamable = require('./streamable.js');

const markAsGarbage = (reactiveCache, key, stream) => {
    reactiveCache.garbage.set(key, stream);
    if (reactiveCache.cache.size > reactiveCache.maxCount &&
        !reactiveCache.cleaning) {
        const continuation = (scheduler$1) => {
            const { cache, maxCount, garbage } = reactiveCache;
            for (const [, stream] of garbage) {
                functions.pipe(stream, disposable.dispose());
                // only delete as many entries as we need to.
                const hasMoreToCleanup = cache.size > maxCount;
                if (hasMoreToCleanup) {
                    scheduler.yield$(scheduler$1, 0);
                }
                else if (!hasMoreToCleanup) {
                    break;
                }
            }
        };
        reactiveCache.cleaning = true;
        const schedulerContinuation = functions.pipe(reactiveCache.cleanupScheduler, scheduler.schedule(continuation));
        disposable.addTeardown(schedulerContinuation, () => {
            reactiveCache.cleaning = false;
        });
    }
};
const switchAllStreamInstance = streamable.createStreamable(observable.switchAll());
const switchAllStream = () => switchAllStreamInstance;
class ReactiveCacheImpl extends disposable.AbstractDisposable {
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
        disposable.addTeardown(this, () => {
            for (const value of this.cache.values()) {
                const [stream] = value;
                functions.pipe(stream, disposable.dispose());
            }
            this.cache.clear();
            this.garbage.clear();
        });
    }
    get(key) {
        const cachedValue = this.cache.get(key);
        if (option.isSome(cachedValue)) {
            const [, observable] = cachedValue;
            return observable;
        }
        return;
    }
    set(key, value) {
        let cachedValue = this.cache.get(key);
        if (option.isNone(cachedValue)) {
            const stream = functions.pipe(switchAllStream(), streamable.stream(this.dispatchScheduler));
            disposable.addTeardown(stream, () => {
                this.cache.delete(key);
                this.garbage.delete(key);
            });
            const onDisposeCleanup = (_) => disposable.addDisposable(this, functions.pipe(this.cleanupScheduler, scheduler.schedule(() => {
                if (stream.observerCount === 0) {
                    markAsGarbage(this, key, stream);
                }
            })));
            const onSubscribeUnmark = () => {
                this.garbage.delete(key);
                return onDisposeCleanup;
            };
            const observable$1 = functions.pipe(stream, observable.onSubscribe(onSubscribeUnmark));
            cachedValue = [stream, observable$1];
            this.cache.set(key, cachedValue);
            // Mark the key as garbage until it is subscribed to.
            markAsGarbage(this, key, stream);
        }
        const [stream, observable$1] = cachedValue;
        stream.dispatch(value);
        return observable$1;
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

exports.createReactiveCache = createReactiveCache;
exports.getOrSet = getOrSet;
