/// <reference types="./EventPublisher.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { newInstance, none, pipe, unsafeCast } from "../../../functions.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, EventSourceLike_addListener, KeyedCollectionLike_get, MulticastedEventSourceLike_listenerCount, QueueableLike_enqueue, ReplayableLike_buffer, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_createFifoQueue from "../../../util/Queue/__internal__/IndexedQueue.createFifoQueue.js";
const EventPublisher_create = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function EventPublisher(instance, replay) {
        init(Disposable_mixin, instance);
        instance.l = newInstance(Set);
        instance[ReplayableLike_buffer] = IndexedQueue_createFifoQueue(replay, "drop-oldest");
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance.l, Iterable_enumerate());
            while (enumerator[EnumeratorLike_move]()) {
                const listener = enumerator[EnumeratorLike_current];
                listener[DisposableLike_dispose](e);
            }
        }));
        return instance;
    }, props({
        l: none,
        [ReplayableLike_buffer]: none,
    }), {
        get [MulticastedEventSourceLike_listenerCount]() {
            unsafeCast(this);
            return this.l.size;
        },
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[ReplayableLike_buffer][QueueableLike_enqueue](next);
            for (const listener of this.l) {
                listener[EventListenerLike_notify](next);
            }
        },
        [EventSourceLike_addListener](listener) {
            if (!this[DisposableLike_isDisposed]) {
                const { l: listeners } = this;
                listeners.add(listener);
                pipe(listener, Disposable_onDisposed(_ => {
                    listeners.delete(listener);
                }));
            }
            const buffer = this[ReplayableLike_buffer];
            const count = buffer[CollectionLike_count];
            for (let i = 0; i < count; i++) {
                const next = buffer[KeyedCollectionLike_get](i);
                listener[EventListenerLike_notify](next);
            }
        },
    }));
    return (options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createPublisherInstance(replay);
    };
})();
export default EventPublisher_create;
