/// <reference types="./PublisherMixin.d.ts" />

import { Set_add, Set_delete, Set_has, Set_size, } from "../../__internal__/constants.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../computations.js";
import { error, newInstance, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../utils.js";
const PublisherMixin = /*@__PURE__*/ (() => {
    const Publisher_listeners = Symbol("Publisher_listeners");
    const Publisher_onListenerDisposed = Symbol("Publisher_onListenerDisposed");
    function onEventPublisherDisposed(e) {
        for (const listener of this[Publisher_listeners]) {
            listener[DisposableLike_dispose](e);
        }
    }
    return returns(mix(include(DisposableMixin), function EventPublisher(options) {
        init(DisposableMixin, this);
        this[Publisher_listeners] = newInstance(Set);
        const autoDispose = options?.autoDispose ?? false;
        pipe(this, DisposableContainer.onDisposed(onEventPublisherDisposed));
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Publisher_onListenerDisposed] = function onListenerDisposed() {
            const listeners = instance[Publisher_listeners];
            listeners[Set_delete](this);
            if (autoDispose && listeners[Set_size] === 0) {
                instance[DisposableLike_dispose]();
            }
        };
        return this;
    }, props({
        [Publisher_listeners]: none,
        [Publisher_onListenerDisposed]: none,
    }), {
        [ComputationLike_isDeferred]: false,
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
    }));
})();
export default PublisherMixin;
