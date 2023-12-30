/// <reference types="./Publisher.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, EventSourceLike_addEventListener, SinkLike_notify, } from "../events.js";
import { error, newInstance, none, pipe } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
export const create = /*@__PURE__*/ (() => {
    const Publisher_autoDispose = Symbol("Publisher_autoDispose");
    const Publisher_listeners = Symbol("Publisher_listeners");
    return createInstanceFactory(mix(include(DisposableMixin), function EventPublisher(instance, options) {
        init(DisposableMixin, instance);
        instance[Publisher_listeners] =
            newInstance(Set);
        instance[Publisher_autoDispose] = options?.autoDispose ?? false;
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
                    this[Publisher_listeners].size === 0) {
                    this[DisposableLike_dispose]();
                }
            }));
        },
    }));
})();
