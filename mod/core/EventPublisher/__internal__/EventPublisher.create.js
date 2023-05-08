/// <reference types="./EventPublisher.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../../__internal__/symbols.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_move, EventListenerLike_isErrorSafe, EventListenerLike_notify, EventPublisherLike_listenerCount, EventSourceLike_addEventListener, } from "../../../core.js";
import Iterable_enumerate from "../../../core/Iterable/__internal__/Iterable.enumerate.js";
import { error, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
const EventPublisher_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin), function EventPublisher(instance) {
        init(Disposable_mixin, instance);
        instance[__EventPublisher_listeners] =
            newInstance(Set);
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
            for (const listener of this[__EventPublisher_listeners]) {
                try {
                    listener[EventListenerLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            if (!this[DisposableLike_isDisposed]) {
                const listeners = this[__EventPublisher_listeners];
                listeners.add(listener);
                pipe(listener, Disposable_onDisposed(_ => {
                    listeners.delete(listener);
                }));
            }
        },
    }));
})();
export default EventPublisher_create;
