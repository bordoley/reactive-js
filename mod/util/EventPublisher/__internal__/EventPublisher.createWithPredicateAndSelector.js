/// <reference types="./EventPublisher.createWithPredicateAndSelector.d.ts" />

import { MappingLike_selector, PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_move, } from "../../../containers.js";
import Iterable_enumerate from "../../../containers/Iterable/__internal__/Iterable.enumerate.js";
import { error, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, EventSourceLike_addListener, KeyedCollectionLike_get, QueueableLike_enqueue, ReplayableLike_buffer, } from "../../../util.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
const EventPublisher_createWithPredicateAndSelector = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(mix(include(Disposable_mixin), function EventPublisher(instance, predicate, selector, replay) {
        init(Disposable_mixin, instance);
        instance[__EventPublisher_listeners] =
            newInstance(Set);
        instance[PredicatedLike_predicate] = predicate;
        instance[MappingLike_selector] = selector;
        // FIXME: use the mixin instead and return this from a getter;
        instance[ReplayableLike_buffer] = Queue_createIndexedQueue(replay, "drop-oldest");
        pipe(instance, Disposable_onDisposed(e => {
            const enumerator = pipe(instance[__EventPublisher_listeners], Iterable_enumerate());
            while (enumerator[EnumeratorLike_move]()) {
                const listener = enumerator[EnumeratorLike_current];
                listener[DisposableLike_dispose](e);
            }
        }));
        return instance;
    }, props({
        [__EventPublisher_listeners]: none,
        [ReplayableLike_buffer]: none,
        [PredicatedLike_predicate]: none,
        [MappingLike_selector]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        get [EventPublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[__EventPublisher_listeners].size;
        },
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            if (!this[PredicatedLike_predicate](next)) {
                return;
            }
            const result = this[MappingLike_selector](next);
            this[ReplayableLike_buffer][QueueableLike_enqueue](result);
            for (const listener of this[__EventPublisher_listeners]) {
                try {
                    listener[EventListenerLike_notify](result);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addListener](listener) {
            if (!this[DisposableLike_isDisposed]) {
                const listeners = this[__EventPublisher_listeners];
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
    return (predicate, selector, options) => {
        const replay = clampPositiveInteger(options?.replay ?? 0);
        return createPublisherInstance(predicate, selector, replay);
    };
})();
export default EventPublisher_createWithPredicateAndSelector;
