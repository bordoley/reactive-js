/// <reference types="./Cache.d.ts" />

import { MAX_SAFE_INTEGER, Map_delete, Map_get, Map_set, Map_size, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../collections/ReadonlyObjectMap.js";
import { keySet } from "../collections.js";
import { DeferredComputationWithSideEffectsType } from "../computations.js";
import { CacheLike_get, ContinuationContextLike_yield, SchedulerLike_schedule, } from "../concurrent.js";
import { EventListenerLike_notify } from "../events.js";
import { alwaysNone, bindMethod, identity, isNone, isSome, newInstance, none, pipe, returns, tuple, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Queue from "../utils/Queue.js";
import { DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../utils.js";
import * as Observable from "./Observable.js";
import * as Subject from "./Subject.js";
import * as SingleUseObservable from "./__internal__/SingleUseObservable.js";
import { SingleUseObservableLike_observer } from "./__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "./__mixins__/DelegatingDispatcherMixin.js";
export const create = /*@__PURE__*/ (() => {
    const CacheStream_scheduleCleanup = Symbol("CacheStream_scheduleCleanup");
    const CacheStream_store = Symbol("CacheStream_store");
    const CacheStream_subscriptions = Symbol("CacheStream_subscriptions");
    return mixInstanceFactory(include(DelegatingDispatcherMixin()), function Cache(instance, scheduler, options) {
        const { maxEntries = MAX_SAFE_INTEGER, cleanupScheduler = scheduler, persistentStore, } = options ?? {};
        const singleUseObservable = SingleUseObservable.create();
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
        const observableSubscription = pipe(singleUseObservable, Observable.map((updaters) => tuple(updaters, pipe(updaters, ReadonlyObjectMap.map((_, k) => instance[CacheStream_store][Map_get](k))))), isSome(persistentStore)
            ? Observable.concatMap(next => {
                const [updaters, values] = next;
                const keys = pipe(values, ReadonlyObjectMap.keep(isNone), keySet(ReadonlyObjectMap.keys));
                return keys[Set_size] > 0
                    ? pipe(persistentStore.load(keys), Observable.map((persistedValues) => tuple(updaters, pipe(values, ReadonlyObjectMap.union(persistedValues)))))
                    : pipe(next, Observable.fromValue());
            }, {
                innerType: DeferredComputationWithSideEffectsType,
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
                innerType: DeferredComputationWithSideEffectsType,
            })
            : Observable.ignoreElements(), Observable.subscribe(scheduler, options));
        let cleanupJob = Disposable.disposed;
        instance[CacheStream_store] = store;
        instance[CacheStream_subscriptions] = subscriptions;
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
        init(DelegatingDispatcherMixin(), instance, singleUseObservable[SingleUseObservableLike_observer]);
        pipe(observableSubscription, Disposable.addTo(instance));
        return instance;
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
                        this[QueueableLike_enqueue]({
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
export const updateMany = (cache, keyValues) => cache[QueueableLike_enqueue](keyValues);
