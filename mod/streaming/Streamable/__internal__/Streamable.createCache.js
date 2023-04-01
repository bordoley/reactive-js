/// <reference types="./Streamable.createCache.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { QueueLike_dequeue } from "../../../__internal__/util.internal.js";
import { bindMethod, compose, identity, invoke, isNone, isSome, none, pipe, } from "../../../functions.js";
import { PublisherLike_publish, } from "../../../rx.js";
import * as Observable from "../../../rx/Observable.js";
import * as Publisher from "../../../rx/Publisher.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, } from "../../../scheduling.js";
import { CacheStreamLike_get, StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import Stream_delegatingMixin from "../../../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import { DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import * as Disposable from "../../../util/Disposable.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
import Streamable_create from "./Streamable.create.js";
const createCacheStream = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin()), function CacheStream(instance, scheduler, options, capacity, cleanupScheduler, persistentStore) {
        instance.store = new Map();
        instance.subscriptions = new Map();
        const cleanupQueue = IndexedQueue_createFifoQueue(MAX_SAFE_INTEGER, "overflow");
        const cleanupContinuation = (ctx) => {
            const { store, subscriptions } = instance;
            while (store.size > capacity) {
                const key = cleanupQueue[QueueLike_dequeue]();
                if (isNone(key)) {
                    break;
                }
                if (!subscriptions.has(key)) {
                    store.delete(key);
                }
                ctx[ContinuationContextLike_yield]();
            }
        };
        let cleanupJob = Disposable.disposed;
        instance.scheduleCleanup = (key) => {
            if (isNone(instance.store.get(key))) {
                return;
            }
            cleanupQueue[QueueableLike_enqueue](key);
            if (!cleanupJob[DisposableLike_isDisposed]) {
                return;
            }
            cleanupJob =
                cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
        };
        const delegate = pipe(Streamable_create(compose(Observable.map(updaters => [
            updaters,
            pipe(updaters, Obj.map((_, k) => instance.store.get(k))),
        ]), isSome(persistentStore)
            ? Observable.concatMap((next) => {
                const [updaters, values] = next;
                const keys = pipe(values, Obj.keys(isNone));
                return keys.size > 0
                    ? pipe(persistentStore.load(keys), Observable.map(persistedValues => [
                        updaters,
                        Obj.union(values, persistedValues),
                    ]))
                    : pipe(next, Observable.fromOptional());
            })
            : identity, Observable.map(([updaters, values]) => pipe(updaters, Obj.map((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable.forEach(Obj.forEach((v, key) => {
            if (isNone(v)) {
                instance.store.delete(key);
                return;
            }
            const oldValue = instance.store.get(key);
            instance.store.set(key, v);
            const observable = instance.subscriptions.get(key);
            if (isSome(observable) && oldValue !== v) {
                observable[PublisherLike_publish](v);
                return;
            }
            instance.scheduleCleanup(key);
        })), isSome(persistentStore)
            ? Observable.concatMap(bindMethod(persistentStore, "store"))
            : Observable.ignoreElements())), invoke(StreamableLike_stream, scheduler, options));
        init(Stream_delegatingMixin(), instance, delegate);
        return instance;
    }, props({
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
    }), {
        [CacheStreamLike_get](key) {
            const { scheduleCleanup, store, subscriptions, [DelegatingLike_delegate]: delegate, } = this;
            return (subscriptions.get(key) ??
                (() => {
                    const subject = Publisher.createRefCounted({ replay: 1 });
                    subscriptions.set(key, subject);
                    pipe(subject, Disposable.onDisposed(_ => {
                        subscriptions.delete(key);
                        scheduleCleanup(key);
                    }), Disposable.addToIgnoringChildErrors(this));
                    const initialValue = store.get(key);
                    if (isSome(initialValue)) {
                        subject[PublisherLike_publish](initialValue);
                    }
                    else {
                        // Try to load the value from the persistence store
                        delegate[QueueableLike_enqueue]({
                            [key]: identity,
                        });
                    }
                    return subject;
                })());
        },
    }));
})();
const Streamable_createCache = (persistentStore, options = {}) => ({
    [StreamableLike_isEnumerable]: false,
    [StreamableLike_isInteractive]: false,
    [StreamableLike_isRunnable]: false,
    [StreamableLike_stream]: (scheduler, streamOptions) => createCacheStream(scheduler, streamOptions, options.capacity ?? MAX_SAFE_INTEGER, options.cleanupScheduler ?? scheduler, persistentStore),
});
export default Streamable_createCache;
