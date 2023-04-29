/// <reference types="./Streamable.createCache.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../../__internal__/util.js";
import { bindMethod, compose, identity, invoke, isNone, isSome, none, pipe, unsafeCast, } from "../../../functions.js";
import ReadonlyMap_keys from "../../../keyed-containers/ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import * as ReadonlyObjectMap from "../../../keyed-containers/ReadonlyObjectMap.js";
import ReadonlyObjectMap_union from "../../../keyed-containers/ReadonlyObjectMap/__internal__/ReadonlyObjectMap.union.js";
import * as Observable from "../../../rx/Observable.js";
import * as Publisher from "../../../rx/Publisher.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Stream_delegatingMixin from "../../../streaming/Stream/__internal__/Stream.delegatingMixin.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, DisposableLike_isDisposed, EventListenerLike_notify, KeyedCollectionLike_get, QueueableLike_enqueue, SchedulerLike_schedule, SchedulerLike_yield, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import * as Disposable from "../../../util/Disposable.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
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
        const delegate = pipe(Streamable_create(compose(Observable.map((updaters) => [
            updaters,
            pipe(updaters, ReadonlyObjectMap.mapWithKey((_, k) => instance.store.get(k))),
        ]), isSome(persistentStore)
            ? Observable.concatMap((next) => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap.keep(isNone), ReadonlyObjectMap.keySet());
                return keys.size > 0
                    ? pipe(persistentStore.load(keys), Observable.map(persistedValues => [
                        updaters,
                        ReadonlyObjectMap_union(values, persistedValues),
                    ]))
                    : pipe(next, Observable.fromOptional());
            })
            : identity, Observable.map(([updaters, values]) => pipe(updaters, ReadonlyObjectMap.mapWithKey((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable.forEach(ReadonlyObjectMap.forEachWithKey((v, key) => {
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
            ? Observable.concatMap(bindMethod(persistentStore, "store"))
            : Observable.ignoreElements())), invoke(StreamableLike_stream, scheduler, options));
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
                    const publisher = Publisher.createRefCounted({ replay: 1 });
                    subscriptions.set(key, publisher);
                    pipe(publisher, Disposable.onDisposed(_ => {
                        subscriptions.delete(key);
                        scheduleCleanup(key);
                    }), Disposable.addTo(this, { ignoreChildErrors: true }));
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
