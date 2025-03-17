/// <reference types="./Cache.d.ts" />

import { MAX_SAFE_INTEGER, Map_delete, Map_get, Map_set, Map_size, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import * as Collection from "../collections/Collection.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import * as Computation from "../computations/Computation.js";
import { DeferredComputationWithSideEffects, } from "../computations.js";
import { alwaysNone, bindMethod, identity, isNone, isSome, newInstance, none, pipe, returns, tuple, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Queue from "../utils/Queue.js";
import DelegatingConsumerMixin from "../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../utils/__mixins__/DelegatingDisposableMixin.js";
import { ContinuationContextLike_yield, DisposableLike_isDisposed, EventListenerLike_notify, QueueLike_dequeue, QueueLike_enqueue, SchedulerLike_schedule, } from "../utils.js";
import * as Observable from "./Observable.js";
import * as Subject from "./Subject.js";
import * as ConsumerObservable from "./__internal__/ConsumerObservable.js";
export const CacheLike_get = Symbol("CacheLike_get");
export const create = /*@__PURE__*/ (() => {
    const CacheStream_scheduleCleanup = Symbol("CacheStream_scheduleCleanup");
    const CacheStream_store = Symbol("CacheStream_store");
    const CacheStream_subscriptions = Symbol("CacheStream_subscriptions");
    const ObservableModule = {
        concatAll: Observable.concatAll,
        keep: Observable.keep,
        map: Observable.map,
    };
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingConsumerMixin()), function Cache(scheduler, options) {
        const { maxEntries = MAX_SAFE_INTEGER, cleanupScheduler = scheduler, persistentStore, } = options ?? {};
        const consumer = ConsumerObservable.create(options);
        const store = newInstance(Map);
        const subscriptions = newInstance(Map);
        const cleanupQueue = Queue.create();
        const cleanupContinuation = (ctx) => {
            while (store[Map_size] > maxEntries) {
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
        pipe(consumer, Observable.map((updaters) => tuple(updaters, pipe(updaters, ReadonlyObjectMap.map((_, k) => this[CacheStream_store][Map_get](k))))), isSome(persistentStore)
            ? Computation.concatMap(ObservableModule)(next => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap.keep(isNone), Collection.keySet(ReadonlyObjectMap.keys));
                return keys[Set_size] > 0
                    ? pipe(persistentStore.load(keys), Observable.map((persistedValues) => tuple(updaters, pipe(values, ReadonlyObjectMap.union(persistedValues)))))
                    : pipe(next, Observable.fromValue());
            }, {
                innerType: DeferredComputationWithSideEffects,
            })
            : identity, Observable.map(([updaters, values]) => pipe(updaters, ReadonlyObjectMap.map((updater, k) => 
        // This could be the cached value or the value
        // loaded from a persistent store.
        updater(values[k])))), Observable.forEach(ReadonlyObjectMap.forEach((v, key) => {
            const oldValue = this[CacheStream_store][Map_get](key);
            if (isNone(v)) {
                this[CacheStream_store][Map_delete](key);
            }
            else {
                this[CacheStream_store][Map_set](key, v);
            }
            const subject = this[CacheStream_subscriptions][Map_get](key);
            // We want to publish none, when the cache does not have the value
            // when initially subscribing to the key.
            const shouldPublish = isNone(v) || oldValue !== v;
            if (isSome(subject) && shouldPublish) {
                subject[EventListenerLike_notify](v);
                return;
            }
            this[CacheStream_scheduleCleanup](key);
        })), isSome(persistentStore)
            ? Computation.concatMap(ObservableModule)(bindMethod(persistentStore, "store"), {
                innerType: DeferredComputationWithSideEffects,
            })
            : Computation.ignoreElements(ObservableModule)(), Observable.subscribe(scheduler), Disposable.addTo(consumer));
        let cleanupJob = Disposable.disposed;
        this[CacheStream_store] = store;
        this[CacheStream_subscriptions] = subscriptions;
        this[CacheStream_scheduleCleanup] = (key) => {
            if (isNone(this[CacheStream_store][Map_get](key))) {
                return;
            }
            cleanupQueue[QueueLike_enqueue](key);
            if (!cleanupJob[DisposableLike_isDisposed]) {
                return;
            }
            cleanupJob =
                cleanupScheduler[SchedulerLike_schedule](cleanupContinuation);
        };
        init(DelegatingDisposableMixin, this, consumer);
        init(DelegatingConsumerMixin(), this, consumer);
        return this;
    }, props({
        [CacheStream_scheduleCleanup]: none,
        [CacheStream_store]: none,
        [CacheStream_subscriptions]: none,
    }), {
        [CacheLike_get](key) {
            const { [CacheStream_scheduleCleanup]: scheduleCleanup, [CacheStream_store]: store, [CacheStream_subscriptions]: subscriptions, } = this;
            return (subscriptions[Map_get](key) ??
                (() => {
                    const subject = Subject.create({
                        autoDispose: true,
                        replay: 1,
                    });
                    subscriptions[Map_set](key, subject);
                    pipe(subject, DisposableContainer.onDisposed(_ => {
                        subscriptions[Map_delete](key);
                        scheduleCleanup(key);
                    }), Disposable.addToContainer(this));
                    const initialValue = store[Map_get](key);
                    if (isSome(initialValue)) {
                        subject[EventListenerLike_notify](initialValue);
                    }
                    else {
                        // Try to load the value from the persistence store
                        this[EventListenerLike_notify]({
                            [key]: identity,
                        });
                    }
                    return subject;
                })());
        },
    });
})();
export const get = (cache, key) => cache[CacheLike_get](key);
export const remove = (cache, key) => updateMany(cache, { [key]: alwaysNone });
export const removeMany = (cache, keys) => updateMany(cache, pipe(keys, ReadonlyArray.map(key => [
    key,
    alwaysNone,
]), ReadonlyObjectMap.fromEntries()));
export const set = (cache, key, v) => update(cache, key, returns(v));
export const setMany = (cache, keyValues) => updateMany(cache, pipe(keyValues, ReadonlyObjectMap.map(v => returns(v))));
export const update = (cache, key, updater) => updateMany(cache, { [key]: updater });
export const updateMany = (cache, keyValues) => cache[EventListenerLike_notify](keyValues);
