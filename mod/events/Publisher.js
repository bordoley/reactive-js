/// <reference types="./Publisher.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, PublisherLike_listenerCount, SinkLike_notify, } from "../events.js";
import { error, newInstance, none, pipe } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
export const create = /*@__PURE__*/ (() => {
    const Publisher_autoDispose = Symbol("Publisher_autoDispose");
    const Publisher_listeners = Symbol("Publisher_listeners");
    const createPublisher = createInstanceFactory(mix(include(DisposableMixin), function EventPublisher(instance, autoDispose) {
        init(DisposableMixin, instance);
        instance[Publisher_listeners] =
            newInstance(Set);
        instance[Publisher_autoDispose] = autoDispose;
        pipe(instance, Disposable.onDisposed(e => {
            for (const listener of instance[Publisher_listeners]) {
                listener[DisposableLike_dispose](e);
            }
        }));
        return instance;
    }, props({
        [Publisher_autoDispose]: false,
        [Publisher_listeners]: none,
    }), {
        [EventListenerLike_isErrorSafe]: true,
        get [PublisherLike_listenerCount]() {
            unsafeCast(this);
            return this[Publisher_listeners].size;
        },
        [SinkLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            for (const listener of this[Publisher_listeners]) {
                try {
                    listener[SinkLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            pipe(this, Disposable.add(listener, { ignoreChildErrors: true }));
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const listeners = this[Publisher_listeners];
            if (listeners.has(listener)) {
                return;
            }
            listeners.add(listener);
            pipe(listener, Disposable.onDisposed(_ => {
                listeners.delete(listener);
                if (this[Publisher_autoDispose] &&
                    this[PublisherLike_listenerCount] === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
    return (options) => createPublisher(options?.autoDispose ?? false);
})();
