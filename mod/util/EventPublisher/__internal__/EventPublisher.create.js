/// <reference types="./EventPublisher.create.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { error, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, EventSourceLike_addListener, EventSourceLike_listenerCount, KeyedCollectionLike_get, QueueableLike_enqueue, ReplayableLike_buffer, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
const EventPublisher_create = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function EventPublisher(instance, replay) {
        init(Disposable_mixin, instance);
        instance.l = newInstance(Set);
        // FIXME: use the mixin instead and return this from a getter;
        instance[ReplayableLike_buffer] = Queue_createIndexedQueue(replay, "drop-oldest");
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
        get [EventSourceLike_listenerCount]() {
            unsafeCast(this);
            return this.l.size;
        },
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            this[ReplayableLike_buffer][QueueableLike_enqueue](next);
            for (const listener of this.l) {
                try {
                    listener[EventListenerLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
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
            try {
                for (let i = 0; i < count; i++) {
                    const next = buffer[KeyedCollectionLike_get](i);
                    listener[EventListenerLike_notify](next);
                }
            }
            catch (e) {
                listener[DisposableLike_dispose](error(e));
            }
        },
    }));
    return (options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createPublisherInstance(replay);
    };
})();
export default EventPublisher_create;
