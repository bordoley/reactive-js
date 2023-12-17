/// <reference types="./Streamable.createCache.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { AssociativeLike_keys, CollectionLike_count, EnumerableLike_enumerate, KeyedLike_get, } from "../../../collections.js";
import Enumerator_fromIterator from "../../../collections/Enumerator/__private__/Enumerator.fromIterator.js";
import * as ReadonlyMap from "../../../collections/ReadonlyMap.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { ContinuationContextLike_yield, SchedulerLike_schedule, StreamableLike_stream, } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { bindMethod, compose, identity, invoke, isNone, isSome, none, pipe, tuple, } from "../../../functions.js";
import { DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as IndexedQueue from "../../../utils/IndexedQueue.js";
import * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingStreamMixin from "../../__mixins__/DelegatingStreamMixin.js";
import Streamable_create from "./Streamable.create.js";
const createCacheStream = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DelegatingStreamMixin()), function CacheStream(instance, scheduler, options, capacity, cleanupScheduler, persistentStore) {
        instance.store = new Map();
        instance.subscriptions = new Map();
        const cleanupQueue = IndexedQueue.create();
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
        const delegate = pipe(Streamable_create(compose(Observable.map((updaters) => tuple(updaters, pipe(updaters, ReadonlyObjectMap.map((_, k) => instance.store.get(k))))), isSome(persistentStore)
            ? Observable.concatMap(next => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap.keep(isNone), ReadonlyObjectMap.keySet());
                return keys.size > 0
                    ? pipe(persistentStore.load(keys), Observable.map((persistedValues) => tuple(updaters, pipe(values, ReadonlyObjectMap.union(persistedValues)))))
                    : pipe(next, Observable.fromValue());
            }, { innerType: Observable.DeferredSideEffectsObservableType })
            : identity, Observable.map(([updaters, values]) => pipe(updaters, ReadonlyObjectMap.map((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable.forEach(ReadonlyObjectMap.forEach((v, key) => {
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
                observable[SinkLike_notify](v);
                return;
            }
            instance.scheduleCleanup(key);
        })), isSome(persistentStore)
            ? Observable.concatMap(bindMethod(persistentStore, "store"), {
                innerType: Observable.DeferredSideEffectsObservableType,
            })
            : Observable.ignoreElements())), invoke(StreamableLike_stream, scheduler, options));
        init(DelegatingStreamMixin(), instance, delegate);
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
        scheduleCleanup: none,
        store: none,
        subscriptions: none,
    }), {
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this.store.size;
        },
        get [AssociativeLike_keys]() {
            unsafeCast(this);
            return pipe(this.store, ReadonlyMap.keys());
        },
        [Symbol.iterator]() {
            unsafeCast(this);
            return pipe(this.subscriptions, ReadonlyMap.values())[Symbol.iterator]();
        },
        [EnumerableLike_enumerate]() {
            return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
        },
        [KeyedLike_get](key) {
            const { scheduleCleanup, store, subscriptions, delegate } = this;
            return (subscriptions.get(key) ??
                (() => {
                    const publisher = Subject.createRefCounted({
                        replay: 1,
                    });
                    subscriptions.set(key, publisher);
                    pipe(publisher, Disposable.onDisposed(_ => {
                        subscriptions.delete(key);
                        scheduleCleanup(key);
                    }), Disposable.addTo(this, { ignoreChildErrors: true }));
                    const initialValue = store.get(key);
                    if (isSome(initialValue)) {
                        publisher[SinkLike_notify](initialValue);
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
