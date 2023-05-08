/// <reference types="./Publisher.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __Publisher_observers } from "../../../__internal__/symbols.js";
import { CollectionLike_count, DispatcherLike_complete, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_move, EventListenerLike_isErrorSafe, EventListenerLike_notify, KeyedCollectionLike_get, MulticastObservableLike_buffer, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, PublisherLike_observerCount, QueueableLike_enqueue, } from "../../../core.js";
import Disposable_mixin from "../../../core/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../core/Disposable/__internal__/Disposable.onDisposed.js";
import Iterable_enumerate from "../../../core/Iterable/__internal__/Iterable.enumerate.js";
import Queue_createIndexedQueue from "../../../core/Queue/__internal__/Queue.createIndexedQueue.js";
import { error, isSome, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
const Publisher_create = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function Publisher(instance, replay) {
        init(Disposable_mixin, instance);
        instance[__Publisher_observers] = newInstance(Set);
        instance[MulticastObservableLike_buffer] = Queue_createIndexedQueue(replay, "drop-oldest");
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance[__Publisher_observers], Iterable_enumerate());
            while (enumerator[EnumeratorLike_move]()) {
                const observer = enumerator[EnumeratorLike_current];
                if (isSome(e)) {
                    observer[DisposableLike_dispose](e);
                }
                else {
                    observer[DispatcherLike_complete]();
                }
            }
        }));
        return instance;
    }, props({
        [__Publisher_observers]: none,
        [MulticastObservableLike_buffer]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [PublisherLike_observerCount]() {
            unsafeCast(this);
            return this[__Publisher_observers].size;
        },
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[MulticastObservableLike_buffer][QueueableLike_enqueue](next);
            for (const observer of this[__Publisher_observers]) {
                try {
                    observer[QueueableLike_enqueue](next);
                }
                catch (e) {
                    observer[DisposableLike_dispose](error(e));
                }
            }
        },
        [ObservableLike_observe](observer) {
            if (!this[DisposableLike_isDisposed]) {
                const { [__Publisher_observers]: observers } = this;
                observers.add(observer);
                pipe(observer, Disposable_onDisposed(_ => {
                    observers.delete(observer);
                }));
            }
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const buffer = this[MulticastObservableLike_buffer];
            const count = buffer[CollectionLike_count];
            try {
                for (let i = 0; i < count; i++) {
                    const next = buffer[KeyedCollectionLike_get](i);
                    observer[QueueableLike_enqueue](next);
                }
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
            }
        },
    }));
    return (options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createPublisherInstance(replay);
    };
})();
export default Publisher_create;
