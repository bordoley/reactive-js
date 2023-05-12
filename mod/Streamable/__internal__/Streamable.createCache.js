/// <reference types="./Streamable.createCache.d.ts" />

import DeferredObservable_concatMap from "../../DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../Observable/__internal__/Observable.ignoreElements.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import Publisher_createRefCounted from "../../Publisher/__internal__/Publisher.createRefCounted.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import ReadonlyMap_keys from "../../ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyObjectMap_forEachWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_keep from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keySet from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_mapWithKey from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_union from "../../ReadonlyObjectMap/__internal__/ReadonlyObjectMap.union.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../__internal__/types.js";
import { bindMethod, compose, identity, invoke, isNone, isSome, none, pipe, unsafeCast, } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, DisposableLike_isDisposed, EventListenerLike_notify, KeyedCollectionLike_get, QueueableLike_enqueue, SchedulerLike_schedule, SchedulerLike_yield, StreamableLike_stream, } from "../../types.js";
import Streamable_create from "./Streamable.create.js";
const createCacheStream = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Stream_delegatingMixin(), Delegating_mixin()), function CacheStream(instance, scheduler, options, capacity, cleanupScheduler, persistentStore) {
        instance.store = new Map();
        instance.subscriptions = new Map();
        const cleanupQueue = Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        const cleanupContinuation = (scheduler) => {
            const { store, subscriptions } = instance;
            while (store.size > capacity) {
                const key = cleanupQueue[QueueLike_dequeue]();
                if (isNone(key)) {
                    break;
                }
                if (!subscriptions.has(key)) {
                    store.delete(key);
                }
                scheduler[SchedulerLike_yield]();
            }
        };
        let cleanupJob = Disposable_disposed;
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
        const delegate = pipe(Streamable_create(compose(Observable_map((updaters) => [
            updaters,
            pipe(updaters, ReadonlyObjectMap_mapWithKey((_, k) => instance.store.get(k))),
        ]), isSome(persistentStore)
            ? DeferredObservable_concatMap((next) => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap_keep(isNone), ReadonlyObjectMap_keySet());
                return keys.size > 0
                    ? pipe(persistentStore.load(keys), Observable_map((persistedValues) => [
                        updaters,
                        ReadonlyObjectMap_union(values, persistedValues),
                    ]))
                    : pipe(next, Optional_toRunnable());
            })
            : identity, Observable_map(([updaters, values]) => pipe(updaters, ReadonlyObjectMap_mapWithKey((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable_forEach(ReadonlyObjectMap_forEachWithKey((v, key) => {
            const oldValue = instance.store.get(key);
            if (isNone(v)) {
                instance.store.delete(key);
            }
            else {
                instance.store.set(key, v);
            }
            const observable = instance.subscriptions.get(key);
            // We want to publish none, when the cache does not have the value
            // when initially subscribing to the key.
            const shouldPublish = isNone(v) || oldValue !== v;
            if (isSome(observable) && shouldPublish) {
                observable[EventListenerLike_notify](v);
                return;
            }
            instance.scheduleCleanup(key);
        })), isSome(persistentStore)
            ? DeferredObservable_concatMap(bindMethod(persistentStore, "store"))
            : Observable_ignoreElements())), invoke(StreamableLike_stream, scheduler, options));
        init(Stream_delegatingMixin(), instance, delegate);
        init(Delegating_mixin(), instance, delegate);
        return instance;
    }, props({
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
    }), {
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this.store.size;
        },
        get [AssociativeCollectionLike_keys]() {
            unsafeCast(this);
            return pipe(this.store, ReadonlyMap_keys());
        },
        [KeyedCollectionLike_get](key) {
            const { scheduleCleanup, store, subscriptions, [DelegatingLike_delegate]: delegate, } = this;
            return (subscriptions.get(key) ??
                (() => {
                    const publisher = Publisher_createRefCounted({ replay: 1 });
                    subscriptions.set(key, publisher);
                    pipe(publisher, Disposable_onDisposed(_ => {
                        subscriptions.delete(key);
                        scheduleCleanup(key);
                    }), Disposable_addTo(this, { ignoreChildErrors: true }));
                    const initialValue = store.get(key);
                    if (isSome(initialValue)) {
                        publisher[EventListenerLike_notify](initialValue);
                    }
                    else {
                        // Try to load the value from the persistence store
                        delegate[QueueableLike_enqueue]({
                            [key]: identity,
                        });
                    }
                    return publisher;
                })());
        },
    }));
})();
const Streamable_createCache = (persistentStore, options = {}) => ({
    [StreamableLike_stream]: (scheduler, streamOptions) => createCacheStream(scheduler, streamOptions, options.capacity ?? MAX_SAFE_INTEGER, options.cleanupScheduler ?? scheduler, persistentStore),
});
export default Streamable_createCache;
