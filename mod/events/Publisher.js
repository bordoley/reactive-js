/// <reference types="./Publisher.d.ts" />

import { Set, Set_add, Set_delete, Set_has, Set_size, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { ComputationLike_isSynchronous } from "../computations.js";
import { EventListenerLike_notify, EventSourceLike_addEventListener, } from "../events.js";
import { error, newInstance, none, pipe, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import DisposableMixin from "../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed } from "../utils.js";
export const create = /*@__PURE__*/ (() => {
    const Publisher_autoDispose = Symbol("Publisher_autoDispose");
    const Publisher_listeners = Symbol("Publisher_listeners");
    const Publisher_onListenerDisposed = Symbol("Publisher_onListenerDisposed");
    function onEventPublisherDisposed(e) {
        for (const listener of this[Publisher_listeners]) {
            listener[DisposableLike_dispose](e);
        }
    }
    return mixInstanceFactory(include(DisposableMixin), function EventPublisher(instance, options) {
        init(DisposableMixin, instance);
        instance[Publisher_listeners] =
            newInstance(Set);
        instance[Publisher_autoDispose] = options?.autoDispose ?? false;
        pipe(instance, DisposableContainer.onDisposed(onEventPublisherDisposed));
        instance[Publisher_onListenerDisposed] = function onListenerDisposed() {
            const listeners = instance[Publisher_listeners];
            listeners[Set_delete](this);
            if (instance[Publisher_autoDispose] && listeners[Set_size] === 0) {
                instance[DisposableLike_dispose]();
            }
        };
        return instance;
    }, props({
        [Publisher_autoDispose]: false,
        [Publisher_listeners]: none,
        [Publisher_onListenerDisposed]: none,
    }), {
        [ComputationLike_isSynchronous]: false,
        [EventListenerLike_notify](next) {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            for (const listener of this[Publisher_listeners]) {
                try {
                    listener[EventListenerLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            this;
            pipe(listener, Disposable.addToContainer(this));
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const listeners = this[Publisher_listeners];
            if (listeners[Set_has](listener)) {
                return;
            }
            listeners[Set_add](listener);
            pipe(listener, DisposableContainer.onDisposed(this[Publisher_onListenerDisposed]));
        },
    });
})();
