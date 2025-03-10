/// <reference types="./PublisherMixin.d.ts" />

import { Set_add, Set_delete, Set_has, Set_size, } from "../../__internal__/constants.js";
import { include, init, mix, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../computations.js";
import { error, isNone, isSome, newInstance, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../utils.js";
import * as Iterable from "../Iterable.js";
const PublisherMixin = /*@__PURE__*/ (() => {
    const Publisher_listeners = Symbol("Publisher_listeners");
    const Publisher_onListenerDisposed = Symbol("Publisher_onListenerDisposed");
    function onEventPublisherDisposed(e) {
        const maybeListeners = this[Publisher_listeners];
        const listeners = maybeListeners instanceof Set
            ? maybeListeners
            : isSome(maybeListeners)
                ? [maybeListeners]
                : [];
        for (const listener of listeners) {
            listener[DisposableLike_dispose](e);
        }
        this[Publisher_listeners] = none;
    }
    return returns(mix(include(DisposableMixin), function EventPublisher(options) {
        init(DisposableMixin, this);
        const autoDispose = options?.autoDispose ?? false;
        pipe(this, DisposableContainer.onDisposed(onEventPublisherDisposed));
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Publisher_onListenerDisposed] = function onListenerDisposed() {
            const maybeListeners = instance[Publisher_listeners];
            if (maybeListeners instanceof Set) {
                maybeListeners[Set_delete](this);
            }
            else if (maybeListeners === this) {
                instance[Publisher_listeners] = none;
            }
            if (maybeListeners instanceof Set && maybeListeners[Set_size] == 1) {
                instance[Publisher_listeners] =
                    Iterable.first()(maybeListeners);
            }
            if (autoDispose && isNone(instance[Publisher_listeners])) {
                instance[DisposableLike_dispose]();
                instance[Publisher_listeners] = none;
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
            const maybeListeners = this[Publisher_listeners];
            const listeners = maybeListeners instanceof Set
                ? maybeListeners
                : isSome(maybeListeners)
                    ? [maybeListeners]
                    : [];
            for (const listener of listeners) {
                try {
                    listener[EventListenerLike_notify](next);
                }
                catch (e) {
                    listener[DisposableLike_dispose](error(e));
                }
            }
        },
        [EventSourceLike_addEventListener](listener) {
            pipe(listener, Disposable.addToContainer(this));
            const maybeListeners = this[Publisher_listeners];
            if (this[DisposableLike_isDisposed] ||
                listener === this ||
                (maybeListeners instanceof Set &&
                    maybeListeners[Set_has](listener)) ||
                maybeListeners === listener) {
                return;
            }
            if (maybeListeners instanceof Set) {
                maybeListeners[Set_add](listener);
            }
            else if (isSome(maybeListeners)) {
                const listeners = (this[Publisher_listeners] =
                    newInstance(Set));
                listeners[Set_add](maybeListeners);
                listeners[Set_add](listener);
            }
            else {
                this[Publisher_listeners] = listener;
            }
            pipe(listener, DisposableContainer.onDisposed(this[Publisher_onListenerDisposed]));
        },
    }));
})();
export default PublisherMixin;
