/// <reference types="./EventSource.createPublisher.d.ts" />

import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Iterable_enumerate from "../../Iterable/__internal__/Iterable.enumerate.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __EventPublisher_listeners } from "../../__internal__/symbols.js";
import { error, newInstance, none, pipe, unsafeCast } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_move, EventListenerLike_isErrorSafe, EventPublisherLike_listenerCount, EventSourceLike_addEventListener, SinkLike_notify, } from "../../types.js";
const EventSource_createPublisher = 
/*@__PURE__*/ (() => {
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
        [SinkLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            for (const listener of this[__EventPublisher_listeners]) {
                try {
                    listener[SinkLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            pipe(this, Disposable_add(listener, { ignoreChildErrors: true }));
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const listeners = this[__EventPublisher_listeners];
            if (listeners.has(listener)) {
                return;
            }
            listeners.add(listener);
            pipe(listener, Disposable_onDisposed(_ => {
                listeners.delete(listener);
            }));
        },
    }));
})();
export default EventSource_createPublisher;
