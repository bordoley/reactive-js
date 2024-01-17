/// <reference types="./Streamable.createCache.d.ts" />

import { MAX_SAFE_INTEGER, Map, Map_delete, Map_get, Map_set, Map_size, Set_delete, Set_has, Set_size, } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { CacheLike_get, ContinuationContextLike_yield, SchedulerLike_schedule, StreamableLike_stream, } from "../../../concurrent.js";
import { EventListenerLike_notify } from "../../../events.js";
import { bindMethod, compose, identity, invoke, isNone, isSome, newInstance, none, pipe, tuple, } from "../../../functions.js";
import { DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_create from "./Streamable.create.js";
const createCacheStream = /*@__PURE__*/ (() => {
    const CacheStream_delegate = Symbol("CacheStream_delegate");
    const CacheStream_scheduleCleanup = Symbol("CacheStream_scheduleCleanup");
    const CacheStream_store = Symbol("CacheStream_store");
    const CacheStream_subscriptions = Symbol("CacheStream_subscriptions");
    return mixInstanceFactory(include(DelegatingStreamMixin()), function CacheStream(instance, scheduler, options, capacity, cleanupScheduler, persistentStore) {
        instance[CacheStream_store] = newInstance(Map);
        instance[CacheStream_subscriptions] =
            newInstance(Map);
        const cleanupQueue = IndexedQueue.create();
        const cleanupContinuation = (ctx) => {
            const { [CacheStream_store]: store, [CacheStream_subscriptions]: subscriptions, } = instance;
            while (store[Map_size] > capacity) {
                const key = cleanupQueue[QueueLike_dequeue]();
                if (isNone(key)) {
                    break;
                }
                if (!subscriptions[Set_has](key)) {
                    store[Set_delete](key);
                }
                ctx[ContinuationContextLike_yield]();
            }
        };
        let cleanupJob = Disposable.disposed;
        instance[CacheStream_scheduleCleanup] = (key) => {
            if (isNone(instance[CacheStream_store][Map_get](key))) {
                return;
            }
            cleanupQueue[QueueableLike_enqueue](key);
            if (!cleanupJob[DisposableLike_isDisposed]) {
                return;
            }
            cleanupJob =
                cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
        };
        const delegate = pipe(Streamable_create(compose(Observable.map((updaters) => tuple(updaters, pipe(updaters, ReadonlyObjectMap.map((_, k) => instance[CacheStream_store][Map_get](k))))), isSome(persistentStore)
            ? Observable.concatMap(next => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap.keep(isNone), ReadonlyObjectMap.keySet());
                return keys[Set_size] > 0
                    ? pipe(persistentStore.load(keys), Observable.map((persistedValues) => tuple(updaters, pipe(values, ReadonlyObjectMap.union(persistedValues)))))
                    : pipe(next, Observable.fromValue());
            }, {
                innerType: Observable.DeferredObservableWithSideEffectsType,
            })
            : identity, Observable.map(([updaters, values]) => pipe(updaters, ReadonlyObjectMap.map((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable.forEach(ReadonlyObjectMap.forEach((v, key) => {
            const oldValue = instance[CacheStream_store][Map_get](key);
            if (isNone(v)) {
                instance[CacheStream_store][Map_delete](key);
            }
            else {
                instance[CacheStream_store][Map_set](key, v);
            }
            const subject = instance[CacheStream_subscriptions][Map_get](key);
            // We want to publish none, when the cache does not have the value
            // when initially subscribing to the key.
            const shouldPublish = isNone(v) || oldValue !== v;
            if (isSome(subject) && shouldPublish) {
                subject[EventListenerLike_notify](v);
                return;
            }
            instance[CacheStream_scheduleCleanup](key);
        })), isSome(persistentStore)
            ? Observable.concatMap(bindMethod(persistentStore, "store"), {
                innerType: Observable.DeferredObservableWithSideEffectsType,
            })
            : Observable.ignoreElements())), invoke(StreamableLike_stream, scheduler, options));
        init(DelegatingStreamMixin(), instance, delegate);
        instance[CacheStream_delegate] = delegate;
        return instance;
    }, props({
        [CacheStream_delegate]: none,
        [CacheStream_scheduleCleanup]: none,
        [CacheStream_store]: none,
        [CacheStream_subscriptions]: none,
    }), {
        [CacheLike_get](key) {
            const { [CacheStream_scheduleCleanup]: scheduleCleanup, [CacheStream_store]: store, [CacheStream_subscriptions]: subscriptions, [CacheStream_delegate]: delegate, } = this;
            return (subscriptions[Map_get](key) ??
                (() => {
                    const subject = Subject.create({
                        autoDispose: true,
                        replay: 1,
                    });
                    subscriptions[Map_set](key, subject);
                    pipe(subject, Disposable.onDisposed(_ => {
                        subscriptions[Map_delete](key);
                        scheduleCleanup(key);
                    }), Disposable.addTo(this, { ignoreChildErrors: true }));
                    const initialValue = store[Map_get](key);
                    if (isSome(initialValue)) {
                        subject[EventListenerLike_notify](initialValue);
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
    });
})();
const Streamable_createCache = (persistentStore, options = {}) => ({
    [StreamableLike_stream]: (scheduler, streamOptions) => createCacheStream(scheduler, streamOptions, options.capacity ?? MAX_SAFE_INTEGER, options.cleanupScheduler ?? scheduler, persistentStore),
});
export default Streamable_createCache;
